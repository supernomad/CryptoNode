/// <reference path="_vsIntellisense.js" /> 
///

//Encryption Formatter.
var JsonFormatter = {
    stringify: function (cipherParams) {
        // create json object with ciphertext
        var jsonObj = {
            ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
        };

        // optionally add iv and salt
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }

        // stringify json object
        return JSON.stringify(jsonObj);
    },

    parse: function (jsonStr) {
        // parse json string
        var jsonObj = JSON.parse(jsonStr);

        // extract ciphertext from json object, and create cipher params object
        var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
        });

        // optionally extract iv and salt
        if (jsonObj.iv) {
            cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
        }

        return cipherParams;
    }
};

//Ember configuration.
App = Ember.Application.create();

App.Router.map(function () {
    this.resource('chat');
});

//Ember Objects
App.User = Ember.Object.extend({
    name: "",
    id: "",
    status: true,
    upload: true
});

App.Message = Ember.Object.extend({
    name: "",
    message: "",
    fromServer: function () {
        var name = this.get('name');
        return (name === "SERVER");
    }.property('name'),
    postedAt: new Date()
});

App.Room = Ember.Object.extend({
    name: "",
    password: "",
    salt: null,
    key: null,
    users: null,
    messages: null
});

App.Client = App.User.extend({
    backgroundWorker: 0,
    connected: false,
    currentTime: new Date(),
    currentRoom: App.Room.create({
        name: "",
        password: "",
        salt: null,
        key: null,
        users: Em.A([]),
        usersFormated: function () {
           alert(this.get('users').find({ name: this.get('name') }));
        },
        messages: Em.A([])
    })
});

App.CurrentClient;

//Ember Routing and Controllers.
App.IndexRoute = Ember.Route.extend({
    model: function () {
        return (App.CurrentClient = App.Client.create());
    },
    setupController: function (controller, model) {
        controller.set('content', model);
    }
});

App.IndexController = Ember.ObjectController.extend({
    startNew: function () {
        var roomName = App.CurrentClient.get('currentRoom').get('name');

        var emitData = {
            room: roomName
        };

        Socket.emit('setupUser', emitData, function (data) {
            var room = App.CurrentClient.get('currentRoom');

            if (data && data.salt && data.roomExists) {
                var password = room.get('password');
                var salt = CryptoJS.enc.Hex.parse(data.salt);
                var key = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32, iterations: 1000 });

                room.set('salt', salt);
                room.set('key', key);
            } else if (data && !data.roomExists && data.salt === null) {
                var password = room.get('password');
                var salt = CryptoJS.lib.WordArray.random(1024 / 8);
                var key = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32, iterations: 1000 });

                room.set('salt', salt);
                room.set('key', key);
            
                var emitData = {
                    room: room.get('name'),
                    salt: CryptoJS.enc.Hex.stringify(salt)
                };

                Socket.emit('createRoom', emitData);
            } else {
                //TODO:: implement server data null error.
            }

            var emitData2 = {
                username: App.CurrentClient.get('name')
            };
        
            Socket.emit('checkName', emitData2, function (data) {
                if (data) {
                    if (!data.nameExists) {
                        var emitData = {
                            name: App.CurrentClient.get('name'),
                            room: App.CurrentClient.get('currentRoom').get('name')
                        };
                        Socket.emit('joinRoom', emitData, function (data) {
                            if (data && data.users) {
                                var currentRoom = App.CurrentClient.get('currentRoom');
                                currentRoom.set('users', data.users);
                                document.location = document.location + "#/chat/";
                            } else {
                                //TODO:: implement server data null error.
                            }
                        });
                    } else {
                        //TODO:: Implement Name exists error catch;
                    }
                } else {
                    //TODO:: implement server data null error.
                }
            });
        });
    }
});

App.ChatRoute = Ember.Route.extend({
    model: function () {
        return App.CurrentClient;
    },
    setupController: function (controller, model) {
        controller.set('content', model);
        model.set('backgroundWorker', setInterval(function () {
            model.set('currentTime', new Date());
        }, 30000));
    }
});

App.ChatController = Ember.ObjectController.extend({
    newMessage: "",

    showSettings: false,

    showInfo: false,

    chatListHeight: 0,

    sendChat: function () {
        var currentRoom = App.CurrentClient.get('currentRoom');
        var name = App.CurrentClient.get('name');
        var key = currentRoom.get('key')
        var plainMessage = this.get('newMessage');

        var encrypted = CryptoJS.AES.encrypt(plainMessage, key, { iv: CryptoJS.lib.WordArray.random(128/8), format: JsonFormatter });

        var encryptedMessage = encrypted.toString();

        Socket.emit('sendChat', {
            name: name,
            message: encryptedMessage,
            postedAt: new Date()
            });

        this.set('newMessage', "");

        Em.$("#newMsg").focus();
    },

    disconnect: function () {
        clearInterval(this.get('backgroundWorker'));

        Socket.disconnect();

        App.CurrentClient.get('currentRoom').destroy();
        App.CurrentClient.destroy();

        document.location = "https://69.248.167.141:8001";
    },

    changeStatus: function () {
        App.CurrentClient.set('status', !App.CurrentClient.get('status'));

        var name = App.CurrentClient.get('name');
        var status = App.CurrentClient.get('status');

        Socket.emit('changeStatus', {
            name: name,
            status: status
        });
    },

    showInfo: function () { },

    showSettings: function () { }
});

//Ember Views
App.MessageTextField = Ember.TextField.extend({
    attributeBindings: ['autofocus'],

    keyUp: function (evt) {
        if (evt.which === 13) {
            this.get('controller').send("sendChat");
        }
    }
});

App.UserInfoTextField = Ember.TextField.extend({
    attributeBindings: ['autofocus'],

    keyUp: function (evt) {
        if (evt.which === 13) {
            this.get('controller').send("startNew");
        }
    }
});

App.ChatListView = Ember.View.extend({
    tagName: 'li',
    didInsertElement: function () {
        $('#chatList').scrollTop(1000000000);
        this._super();
    }
});

App.UserListView = Ember.View.extend({
    tagName: 'li',

    showFileUpload: function () {
    },
    sendFile: function () {
    }
});
//Ember Formatters
Ember.Handlebars.registerBoundHelper('timeForm', function (data, options) {
    var time = options.hash.time;
    return moment(data).from(time);
});

//Socket-io-client configuation
Socket = io.connect('https://69.248.167.141:8001', { secure: true });

Socket.on('connect', function () {
    App.CurrentClient.set('connected', true);
});

Socket.on('addUser', function (data) {
    if (data && data.name && data.id && data.status) {
        App.CurrentClient.get('currentRoom').get('users').pushObject(App.User.create({ name: data.name, id: data.id, status: data.status }));
    } else {
        //TODO:: implement server data null error.
    }
});

Socket.on('removeUser', function (data) {
    if (data && data.id) {
        var users = App.CurrentClient.get('currentRoom').get('users');
        users.removeObject(users.findProperty('id', data.id));
    } else {
        //TODO:: implement server data null error.
    }
});

Socket.on('updateUser', function (data) {
    if (data && data.name && data.id && data.status) {
        App.CurrentClient.get('currentRoom').get('users').find({ id: data.id }).set('status', data.status);
    } else {
        //TODO:: implement server data null error.
    }
});

Socket.on('updateChat', function (data) {
    if (data && data.message && data.name && data.postedAt) {
        var currentRoom = App.CurrentClient.get('currentRoom');
        var currentTime = App.CurrentClient.get('currentTime');
        if (data.name === "SERVER") {
            currentRoom.get('messages').pushObject(App.Message.create({
                name: data.name,
                message: data.message,
                postedAt: ((data.postedAt > currentTime)? currentTime : data.postedAt)
            }));
        } else {
            var key = currentRoom.get('key');
            var encrypted = JsonFormatter.parse(data.message);
            var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: encrypted.iv });
            var plainMessage = decrypted.toString(CryptoJS.enc.Utf8);

            currentRoom.get('messages').pushObject(App.Message.create({
                name: data.name,
                message: plainMessage,
                //Inline if added to fix timestamp from showing future send dates.
                postedAt: ((data.postedAt > currentTime) ? currentTime : data.postedAt)
            }));
        }
    } else {
        //TODO:: implement server data null error.
    }
});

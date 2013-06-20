/// <reference path="./_VSdoc.js" /> 
/// 
Array.prototype.ObjectIndexOf = function (searchTerm, property) {
    if (property) {
        for (var i = 0, len = this.length; i < len; i++) {
            if (this[i][property] === searchTerm) return i;
        }
        return -1;
    }
    else 
        return this.indexOf(searchTerm);
    return -1;
};
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 1024;

    function charCodeFromCharacter(c) {
        return c.charCodeAt(0);
    }

    var byteCharacters = atob(b64Data),
        byteArrays = [],
        slice,
        byteNumbers,
        byteArray;

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        slice = byteCharacters.slice(offset, offset + sliceSize);
        byteNumbers = Array.prototype.map.call(slice, charCodeFromCharacter);
        byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
}

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
            cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
        }

        return cipherParams;
    }
};

//Ember Application Decleration
App = Em.Application.create();

//Custom Ember Objects
App.CurrentUser = null;

App.User = Em.Object.extend({
    name: '',
    id: '',
    status: true,
    isCurrentUser: function () {
        var user = this.get('name');
        var curUser = App.CurrentUser.get('name');
        if (user === curUser) {
            return true;
        } else {
            return false;
        }
    }.property('name')
});

App.Message = Em.Object.extend({
    from: '',
    data: '',
    posted: null
});

App.MessageBlob = Em.Object.extend({
    from: '',
    messages: Em.A([]),
    postedAt: null
});

App.Room = Em.Object.extend({
    users: Em.A([]),
    messageBlobs: Em.A([]),
    numUsers: function () {
        var users = this.get('users');
        return users.length;
    },
    numMessageBlobs: function () {
        var blobs = this.get('messageBlobs');
        return blobs.length;
    }
});

App.Client = App.User.extend(Em.Validations.Mixin);

App.Client.reopen({
    validations: {
        userName: {
            length: { minimum: 2, maximum: 10, messages: { minimum: 'Username should be more than 2 characters.', maximum: 'Username should be less than 10 characters.' } }
        },
        roomName: {
            length: { minimum: 5, maximum: 256, messages: { minimum: 'Room should be more than 5 characters.', maximum: 'Room should be less than 256 characters.' } }
        },
        roomPassword: {
            format: { with: RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d,.;:]).+$'), allowBlank: false, message: 'Must contain at least 1 uppercase and 1 lowercase character as well as a number or symbol.' },
            length: { minimum: 10, messages: { minimum: "The password must be at least 10 characters." } }
        }
    },
    lastMessageFrom: null,
    key: null,
    salt: null,
    backgroundWorker: 0,
    connected: false,
    playSound: true,
    room: null
});

//Custom Ember Views
Em.TextField.reopen({
    attributeBindings: ['autofocus']
});

App.ChatList = Em.View.extend({
    tagName: 'ul',
    classNames: ['chatList'],
    templateName: 'chatList'
});

App.ChatListItem = Em.View.extend({
    tagName: 'li',
    templateName: 'chatListItem'
});

App.ChatMessage = Em.View.extend({
    didInsertElement: function () {
        $('ul.chatList').scrollTop(1000000000);
    }
});

App.UserList = Em.View.extend({
    tagName: 'ul',
    classNames: ['userList'],
    templateName: 'userList'
});

App.UserListItem = Em.View.extend({
    tagName: 'li',
    templateName: 'userListItem',
    toggleUpload: function () {
        this.$('div.fileUp').first().slideToggle(300);
    }
});

App.UserInfo = Em.View.extend({
    tagName: 'table',
    classNames: ['cut-off'],
    templateName: 'userInfo',
    keyUp: function (evt) {
        if (evt.which === 13) {
            this.get('controller').send('connect');
        }
    },

    showAbout: function () { alert('woot'); }
});

App.NewMessage = Em.View.extend({
    tagName: 'div',
    classNames: ['newMessage'],
    templateName: 'newMessage',
    sendNewMessage: function () {
        var plainText = this.$('input[type="text"]').first().val(),
            key = App.CurrentUser.get('key'),
            encrypted = CryptoJS.AES.encrypt(plainText, key, { iv: CryptoJS.lib.WordArray.random(128 / 8), format: JsonFormatter }),
            encryptedString = encrypted.toString(),
            emitData = {
                name: App.CurrentUser.get('name'),
                message: encryptedString,
                postedAt: new Date()
            };
        Socket.emit('sendChat', emitData);
        this.$('input[type="text"]').first().val('').focus();
    },
    keyUp: function (evt) {
        if (evt.which === 13) {
            this.sendNewMessage();
        }
    }
});

App.Download = Em.View.extend({
    tagName: 'div',
    classNames: ['fileDown'],
    templateName: 'download',
    downloadData: '',
    downloadName: '',
    acceptDownload: function () {
        var downloadData = this.get('downloadData'),
            downloadName = this.get('downloadName');

        saveAs(b64toBlob(downloadData), downloadName);

        this.set('downloadData', '');
        this.set('downloadName', '');
        this.$().slideUp(300);
    },
    denyDownload: function () {
        this.set('downloadData', '');
        this.set('downloadName', '');
        this.$().slideUp(300);
    }

});

App.Upload = Em.View.extend({
    tagName: 'div',
    classNames: ['fileUp'],
    templateName: 'upload',
    sendChunkedFile: function () {
        var file = this.$('input[type="file"]')[0].files[0],
            fr = new FileReader,
            chunkSize = 512000,
            chunks = Math.ceil(file.size / chunkSize),
            chunk = 0,
            toUser = this.$('button').first().attr('id'),
            upload = this.$(),
            progress = this.$('progress'),
            start = -1,
            end = -1;

        progress[0].max = chunks - 1;

        function loadNext() {
            progress[0].value = chunk;

            start = chunk * chunkSize;
            end = start + chunkSize >= file.size ? file.size : start + chunkSize;

            fr.onloadend = function (evt) {
                var result = evt.target.result,
                    resLength = result.length,
                    key = App.CurrentUser.get('key'),
                    plain = CryptoJS.lib.WordArray.create(result);

                var encrypted = CryptoJS.AES.encrypt(plain, key, { iv: CryptoJS.lib.WordArray.random(128 / 8) });

                var emitData = {
                    fileName: file.name,
                    chunkData: JsonFormatter.stringify(encrypted),
                    destinationUser: toUser,
                    from: App.CurrentUser.get('id'),
                    chunkNumber: chunk,
                    totalChunks: chunks - 1
                };

                Socket.emit('sendChunk', emitData);

                if (++chunk < chunks) {
                    loadNext();
                } else {
                    upload.slideUp(300);
                    upload.children('input[type="file"]').replaceWith('<input type="file" />');

                    progress[0].value = 0;
                }
            };

            var slice = file.slice(start, end);
            fr.readAsArrayBuffer(slice);
        }

        loadNext();
    },
});

App.PrivateMessage = Em.View.extend({
    tagName: 'div',
    classNames: ['pvtMsg'],
    templateName: 'private'
});

App.ApplicationControls = Em.View.extend({
    tagName: 'div',
    classNames: ['appControls'],
    templateName: 'controls',
    toggleStatus: function () {
        App.CurrentUser.set('status', !App.CurrentUser.get('status'));
        Socket.emit('changeStatus', { name: App.CurrentUser.get('name'), status: App.CurrentUser.get('status') });
    },
    toggleSound: function () {
        App.CurrentUser.set('playSound', !App.CurrentUser.get('playSound'));
    },
    disconnect: function () {
        Socket.disconnect();
        App.CurrentUser = null;
        document.location = document.location.origin;
    }
});

//Custom Ember Formatters
Em.Handlebars.registerBoundHelper('timeRelative', function (data) {
    return moment(data).fromNow();
});

//Custom Ember Routing/Controllers
App.Router.map(function () {
    this.resource('chat');
});

App.IndexRoute = Em.Route.extend({
    model: function () {
        App.CurrentUser = App.Client.create();
        App.CurrentUser.set('room', App.Room.create());
        return App.CurrentUser;
    },
    setupController: function (controller, model) {
        controller.set('content', model);
    }
});

App.IndexController = Em.ObjectController.extend({
    connect: function () {
        App.CurrentUser.validate().then(function () {
            if (App.CurrentUser.get('isValid')) {
                var name = App.CurrentUser.get('userName'),
                    room = App.CurrentUser.get('roomName'),
                    pass = App.CurrentUser.get('roomPassword'),
                    emitData;

                Socket.emit('checkRoom', room, function (data) {
                    if (data && typeof data === 'object' && typeof data.roomExists === 'boolean' && typeof data.salt === 'string') {
                        var salt,
                            key;

                        if (data.roomExists) {
                            salt = CryptoJS.enc.Hex.parse(data.salt),
                            key = CryptoJS.PBKDF2(pass, salt, { keySize: 256 / 32, iterations: 1000 });
                            App.CurrentUser.set('key', key);
                            App.CurrentUser.set('salt', salt);

                            emitData = {
                                room: room,
                                user: name
                            };

                            Socket.emit('checkUsername', emitData, function (data) {
                                if (typeof data === 'boolean') {
                                    if (data) {
                                        Socket.emit('connectToNode', { room: room, user: name }, function (data) {
                                            if (typeof data === 'string') {
                                                App.CurrentUser.set('id', data);
                                                App.CurrentUser.set('name', name);
                                                document.location = document.location + "#/chat/";
                                            }
                                        });
                                    }
                                } 
                            });
                        } else {
                            salt = CryptoJS.lib.WordArray.random(1024 / 8),
                            key = CryptoJS.PBKDF2(pass, salt, { keySize: 256 / 32, iterations: 1000 });
                            App.CurrentUser.set('key', key);
                            App.CurrentUser.set('salt', salt);

                            emitData = {
                                room: room,
                                salt: CryptoJS.enc.Hex.stringify(salt)
                            };

                            Socket.emit('createNode', emitData, function (data) {
                                if (typeof data === 'boolean') {
                                    if (data) {
                                        Socket.emit('connectToNode', { room: room, user: name }, function (data) {
                                            if (typeof data === 'string') {
                                                App.CurrentUser.set('id', data);
                                                App.CurrentUser.set('name', name);
                                                document.location = document.location + "#/chat/";
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });}});

App.ChatRoute = Em.Route.extend({
    model: function () {
        if (App.CurrentUser) {
            return App.CurrentUser;
        } else {
            document.location = document.location.origin;
        }
    },
    setupController: function (controller, model) {
        controller.set('content', model);
    }
});

App.ChatController = Em.ObjectController.extend({
});

//WebSocket Declerations
Socket = io.connect(document.location.origin, { secure: true });

Socket.on('connect', function () {
    App.CurrentUser.set('connected', true);
});

Socket.on('updateUsers', function (data) {
    if (Array.isArray(data)) {
        App.CurrentUser.get('room').set('users', []);
        users = App.CurrentUser.get('room').get('users');
        for (var i = 0, len = data.length; i < len; i++) {
            var newUser = App.User.create();
            newUser.set('name', data[i].name);
            newUser.set('id', data[i].id);
            newUser.set('status', data[i].status);
            if (!newUser.get('isCurrentUser')) {
                users.pushObject(newUser);
            }
        }
    } else {
        //TODO:: Implement server data error.
    }
});

Socket.on('updateChat', function (data) {
    if (typeof data === 'object' && data !== null && typeof data.name === 'string' && typeof data.message === 'string' && data.postedAt) {
        var blob,
            encrypted,
            key,
            decrypted,
            plainText,
            newMessage;

        if (App.CurrentUser.get('lastMessageFrom') === data.name) {
            blob = App.CurrentUser.get('room').get('messageBlobs').findProperty('from', data.name);

            blob.set('postedAt', data.postedAt);

            if (data.name === 'SERVER') {
                newMessage = App.Message.create();
                newMessage.set('from', data.name);
                newMessage.set('data', data.message);
                newMessage.set('postedAt', data.postedAt);

                blob.get('messages').pushObject(newMessage);
            } else {
                encrypted = JsonFormatter.parse(data.message);
                key = App.CurrentUser.get('key');
                decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: encrypted.iv });
                plainText = decrypted.toString(CryptoJS.enc.Utf8);

                newMessage = App.Message.create();
                newMessage.set('from', data.name);
                newMessage.set('data', plainText);
                newMessage.set('postedAt', data.postedAt);

                blob.get('messages').pushObject(newMessage);
            }
        } else {
            App.CurrentUser.set('lastMessageFrom', data.name);

            blob = App.MessageBlob.create();
            blob.set('from', data.name);
            blob.set('postedAt', data.postedAt);
            blob.set('messages', Em.A([]));

            if (data.name === 'SERVER') {
                newMessage = App.Message.create();
                newMessage.set('from', data.name);
                newMessage.set('data', data.message);
                newMessage.set('postedAt', data.postedAt);

                blob.get('messages').pushObject(newMessage);
            } else {
                encrypted = JsonFormatter.parse(data.message);
                key = App.CurrentUser.get('key');
                decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: encrypted.iv });
                plainText = decrypted.toString(CryptoJS.enc.Utf8);

                newMessage = App.Message.create();
                newMessage.set('from', data.name);
                newMessage.set('data', plainText);
                newMessage.set('postedAt', data.postedAt);

                blob.get('messages').pushObject(newMessage);
            }

            App.CurrentUser.get('room').get('messageBlobs').pushObject(blob);
        }
    } else {
        //TODO:: Implement server data error.
    }
});

Socket.on('updateUser', function (data) {
    if(typeof data === 'object' && data !== null && typeof data.name === 'string' && typeof data.id === 'string' && typeof data.status === 'boolean'){
        var user = App.CurrentUser.get('room').get('users').findProperty('id', data.id);
        Em.set(user, 'status', data.status);
    } else {
        //TODO:: Implement server data error.
    }
});

Socket.on('recFile', function (data) {
    if (data) {
        var link = $('#' + data.from),
            down = link.parent('div.fileDown'),
            encrypted = JsonFormatter.parse(data.data),
            key = App.CurrentUser.get('key'),
            decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: encrypted.iv }),
            plainText = decrypted.toString(CryptoJS.enc.Utf8);

        down.slideToggle(300);
        down.children('span').first().text(data.name);
        
        link.attr({
            href: plainText,
            download: data.name
        });
    }
});

CHUNKS = {};
TotalChunks = 0;
RecChunks = 0;
ChunkInterval = -1;

Socket.on('recChunk', function (data) {
    if (data) {
        var encrypted = JsonFormatter.parse(data.chunkData),
            key = App.CurrentUser.get('key'),
            decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: encrypted.iv }),
            plainText = decrypted.toString(CryptoJS.enc.Hex);

        CHUNKS[data.chunkNumber] = plainText;
        RecChunks++;
        if (data.chunkNumber === 0) {
            TotalChunks = data.totalChunks + 1;
            ChunkInterval = setInterval(function () {
                if (TotalChunks === RecChunks) {
                    var HexString = '';
                    for (var i = 0; i < TotalChunks; i++) {
                        HexString += CHUNKS[i];
                    }
                    var base64String = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(HexString));


                    var span = $('#' + data.from),
                        down = span.parent('div.fileDown'),
                        downView = Em.View.views[down.attr('id')];

                    down.slideToggle(300);

                    Em.set(downView, 'downloadData', base64String);
                    Em.set(downView, 'downloadName', data.fileName);

                    RecChunks = 0;
                    CHUNKS = {};
                    TotalChunks = 0;
                    clearInterval(ChunkInterval);
                }
            }, 1000);
        }
    }
});

Socket.on('invalidData', function (data) {
    if (typeof data === 'string') {
        console.log(data);
    }
});
/// <reference path="/Node/node.js" />
///

//Prototyping.
Array.prototype.ObjectIndexOf = function (searchTerm, property) {
    if (searchTerm && property) {
        for (var i = 0, len = this.length; i < len; i++) {
            if (this[i][property] === searchTerm) return i;
        }
        return -1;
    }
    else if (searchTerm)
        return this.indexOf(searchTerm);
    else
        return -1;
};
Array.prototype.Remove = function (searchTerm, property) {
    var removed = false;
    if (property && searchTerm) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i][property] === searchTerm) {
                this.splice(i, 1);
                removed = true;
                break;
            }
        }
        return removed;
    }
};

//Var declerations.
var fs = require('fs'),
    exp = require('express'),
    https = exp(),
    http = exp(),
    sslKey = fs.readFileSync('./SSL/privatekey.pem').toString(),
    sslCert = fs.readFileSync('./SSL/certificate.pem').toString(),
    creds = { key: sslKey, cert: sslCert },
    insecure = require('http').createServer(http).listen(8000),
    secure = require('https').createServer(creds, https).listen(8001),
    io = require('socket.io').listen(secure),
    rooms = {};

//Model declerations.
function userModel(Name, Id) {
    var self = this;
    self.name = Name;
    self.id = Id;
    self.status = true;
}
function messageModel(User, Message, Time) {
    var self = this;
    self.name = User;
    self.message = Message;
    self.postedAt = Time;
}
function roomModel(salt) {
    var self = this;
    self.salt = salt;
    self.users = [];
}

//Web Server configuration.
http.get('*', function (req, res) {
    res.redirect('https://69.248.167.141:8001/');
});
https.use(exp.static(__dirname + '/Content/'));
https.get('/', function (request, response) {
    var pageString = fs.readFileSync("./Views/Main.html", { encoding: "utf8" });
    if (pageString) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(pageString);
        response.end();
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write("Could not load file please try again.");
        response.end();
    }
});

//Web Socket configuration.
io.sockets.on('connection', function (socket) {
    socket.on('setupUser', function (data, callback) {
        if (data && callback) {
            var emitData;
            if (rooms[data.room]) {
                emitData = {
                    roomExists: true,
                    salt: rooms[data.room].salt
                };
            } else {
                emitData = {
                    roomExists: false,
                    salt: null
                };
            }
            callback(emitData);
        } else {
            //TODO:: null data error.
        }
    });

    socket.on('createRoom', function (data) {
        if (data) {
            rooms[data.room] = new roomModel(data.salt);
        } else {
            //TODO:: null data error.
        }
    });

    socket.on('checkName', function (data, callback) {
        if (data) {
            var ext = false;
            for (var i in rooms) {
                if (rooms[i].users.ObjectIndexOf(data.username, 'user') !== -1) {
                    ext = true;
                    break;
                }
            }
            if (!ext) {
                socket.username = data.username;
            }
            callback({ nameExists: ext });
        }
    });

    socket.on('joinRoom', function (data, joinCall) {
        if (data) {
            if (rooms[data.room]) {
                socket.join(data.room);

                socket.room = data.room;

                var len = rooms[data.room].users.push(new userModel(data.name, socket.id));

                io.sockets.to(data.room).emit('addUser', rooms[data.room].users[len - 1]);

                socket.emit('updateChat', { name: "SERVER", message: "Thank you " + data.name + ". You have joined the chat in Node " + data.room, postedAt: new Date() });
                
                socket.broadcast.to(data.room).emit('updateChat', { name: "SERVER", message: data.name + " has joined the node.", postedAt: new Date() });

                joinCall({ users: rooms[data.room].users });
            } else {
                //TODO:: null room error;
            }
        } else {
            //TODO:: null data error.
        }
        
    });

    socket.on('disconnect', function () {
        for (var i in rooms) {
            if (rooms[i].users.length === 0) {
                delete rooms[i];
            } else {
                if (rooms[i].users.Remove(socket.id, 'id')) {
                    io.sockets.to(i).emit('removeUser', { id: socket.id });
                    io.sockets.to(i).emit('updateChat', { name: "SERVER", message: socket.username + " has left the node.", postedAt: new Date() });
                }
            }
        }
    });

    socket.on('sendChat', function (data) {
        if (data) {
            io.sockets.to(socket.room).emit('updateChat', data);
        }
    });

    socket.on('changeStatus', function (data) {
        if (data) {
            socket.broadcast.to(socket.room).emit('updateChat', { name: "SERVER", message: (data.status) ? (data.name + " is now available.") : (data.name + " is now busy."), postedAt: new Date() });
            io.sockets.to(socket.room).emit('updateUser', {name: data.name , id: socket.id, status:data.status });
        }
    });

    socket.on('sendFile', function (data) {

    });

    socket.on('sendPrivateMessage', function (data) {

    });    

    //TODO:: Implement Voice Chat.
});

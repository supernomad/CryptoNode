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

//Function check used to ensure emit callbacks are indeed functions.
function isFunc(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
}

//Var declerations.
var fs = require('fs'),
    exp = require('express'),
    http = exp(),
    https = exp(),
    sslKey = fs.readFileSync('./SSL/privatekey.pem').toString(),
    sslCert = fs.readFileSync('./SSL/certificate.pem').toString(),
    creds = { key: sslKey, cert: sslCert },
    insecure = require('http').createServer(http).listen(8000),
    secure = require('https').createServer(creds, https).listen(8001),
    io = require('socket.io').listen(secure),
    rooms = {};

//Model declerations.
function userModel(Name, Id) {
    return {
        name: Name,
        id: Id,
        status: true
    };
} 
function messageModel(User, Message, Time) {
    return {
        name: User,
        message: Message,
        postedAt: Time
    };
}
function roomModel(newSalt) {
    var findUserIndexDefinition = function (searchTerm, property) {
        if (property && searchTerm)
            return this.users.ObjectIndexOf(searchTerm, property);
        else if (searchTerm)
            return this.users.ObjectIndexOf(searchTerm);
        else
            throw new Error('SearchTerm must be defined.');
    };

    var checkUsernameDefinition = function (name) {
        if (typeof name === 'string') {
            if (this.users.ObjectIndexOf(name, 'name') === -1) {
                return true;
            } else {
                return false;
            }
        }
    };

    return {
        salt: newSalt,
        users: [],
        findUserIndex: findUserIndexDefinition,
        checkUsername: checkUsernameDefinition
    };
}

//Web Server configuration.
http.all('*', function (req, res) {
    res.redirect('https://127.0.0.1:8001/');
});
https.use(exp.static(__dirname + '/Content/'));
https.all('*', function (request, response) {
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
    socket.on('checkRoom', function (data, fn) {
        if (typeof data === 'string' && isFunc(fn)) {
            if (rooms[data]) {
                fn({roomExists: true, salt: rooms[data].salt});
            } else {
                fn({ roomExists: false, salt: '' });
            }
        } else {
            socket.emit('invalidData', 'checkRoom data was invalid.');
        }
    });

    socket.on('checkUsername', function (data, fn) {
        if (typeof data === 'object' && typeof data.room === 'string' && typeof data.user === 'string' && isFunc(fn)) {
            fn(rooms[data.room].checkUsername(data.user));
        } else {
            socket.emit('invalidData', 'checkUsername data was invalid.');
        }
    });

    socket.on('createNode', function (data, fn) {
        if (typeof data === 'object' && typeof data.room === 'string' && typeof data.salt === 'string' && isFunc(fn)) {
            if (!rooms[data.room]) {
                rooms[data.room] = new roomModel(data.salt);
                fn(true);
            } else {
                fn(false);
            }
        } else {
            socket.emit('invalidData', 'createNode data was invalid.');
        }
    });

    socket.on('connectToNode', function (data, fn) {
        if (typeof data === 'object' && typeof data.room === 'string' && typeof data.user === 'string' && isFunc(fn)) {
            if (rooms[data.room]) {
                socket.room = data.room;
                socket.username = data.user;
                rooms[data.room].users.push(new userModel(data.user, socket.id));
                io.sockets.to(data.room).emit('updateChat', new messageModel('SERVER', data.user + ' has joined the node.', new Date()));
                socket.join(data.room);
                io.sockets.to(data.room).emit('updateUsers', rooms[data.room].users);
                socket.emit('updateChat', new messageModel('SERVER', 'You have joined the node ' + data.room + '.', new Date()));
                fn(socket.id);
            }
        } else {
            socket.emit('invalidData', 'connectToNode data was invalid.');
        }
    });

    socket.on('sendChat', function (data) {
        if (data && typeof data.name === "string" && typeof data.message === "string" && data.postedAt) {
            io.sockets.to(socket.room).emit('updateChat', data);
        } else {
            socket.emit('invalidData', 'sendChat data was invalid.');
        }
    });

    socket.on('changeStatus', function (data) {
        if (data && typeof data.name === "string" && typeof data.status === "boolean") {
            var ind = rooms[socket.room].users.ObjectIndexOf(socket.id, 'id');
            if (ind !== -1) {
                rooms[socket.room].users[ind].status = data.status;
                socket.broadcast.to(socket.room).emit('updateChat', { name: "SERVER", message: (data.status) ? (data.name + " is now available.") : (data.name + " is now busy."), postedAt: new Date() });
                io.sockets.to(socket.room).emit('updateUser', { name: data.name, id: socket.id, status: data.status });
            } 
        } else {
            socket.emit('invalidData', 'changeStatus data was invalid.');
        }
    });

    socket.on('sendChunk', function (data) {
        if (data && typeof data.fileName === 'string' && typeof data.chunkData === 'string' && typeof data.destinationUser === 'string' && typeof data.from === 'string' && typeof data.chunkNumber === 'number' && typeof data.totalChunks === 'number') {
            io.sockets.socket(data.destinationUser).emit('recChunk', data);
        } else {
            socket.emit('invalidData', 'sendChunk data was invalid.');
        }
    });

    socket.on('sendFile', function (data) {
        if (data && typeof data.name === 'string' && typeof data.data === 'string') {
            io.sockets.socket(data.destinationUser).emit('recFile', data);
        } else {
            socket.emit('invalidData', 'sendFile data was invalid.');
        }
    });

    socket.on('sendPrivateMessage', function (data) {
        if (data) {

        } else {
            socket.emit('invalidData', 'sendPrivateMessage data was invalid');
        }
    });

    socket.on('disconnect', function () {
        if (socket.room && rooms[socket.room]) {
            if (rooms[socket.room].users.length === 1) {
                delete rooms[socket.room];
            } else {
                if (rooms[socket.room].users.Remove(socket.id, 'id')) {
                    io.sockets.to(socket.room).emit('removeUser', { id: socket.id });
                    io.sockets.to(socket.room).emit('updateChat', { name: "SERVER", message: socket.username + " has left the node.", postedAt: new Date() });
                }
            }
        }
    });

    //TODO:: Implement Video/Voice Chat.
});
var socket = io(),
    app = {};

socket.on('msg', function(msg) {
    app.recieve_message(msg);
});

app.commands = [];
app.commandIndex = 0;
app.salt = "961531a469ae307ecba504d9218fc3dbfd78a104c602b47654fc67dd285895c9cecd040e6c61c7ca1092e7df6bc45431bc62c1c9562b32517916f4302f2d9133fd7400f18404f3e41772a0e58c1bd052d0dfe7359ac711271026786f961b35100ed9358dc620a57d91da84d78c92911f7adc6841f066b0a7433c9607f382263b",
app.key = undefined;
app.room = undefined;
app.user = undefined;
app.pass = undefined;

var jsonFormatter = {
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

app.join = function(username, room, password) {
    if(app.pass) {
        app.add_line("system", "leave currently joined room first.");
        return;
    }

    app.pass = password;
    app.key = CryptoJS.PBKDF2(password, app.salt, { keySize: 256 / 32, iterations: 1000 })
    app.user = username;
    app.room = room;
    socket.emit('join-room', {
        name: username,
        room: room,
        msg: username + " has joined the room."
    });

    app.add_line("system", "joined room " + room);

    socket.emit('history');
};

app.leave = function() {
    if(!app.room || !app.user) {
        app.add_line("system", "must be joined to a room first.");
        return;
    }

    socket.emit('leave-room');
    app.add_line("system", "left room " + app.room);

    app.key = undefined;
    app.room = undefined;
    app.user = undefined;
    app.pass = undefined;
}

app.users = function() {
    if(!app.room || !app.user) {
        app.add_line("system", "must be joined to a room first.");
        return;
    }
    socket.emit('users');
}

app.rooms = function() {
    socket.emit('rooms');
}

app.send_message = function(msg) {
    var iv = CryptoJS.lib.WordArray.random(128 / 8)
    var encrypted = CryptoJS.AES.encrypt(msg, app.key, { iv:iv });
    var string = jsonFormatter.stringify(encrypted);
    socket.emit('msg', {
        name: app.user,
        room: app.room,
        msg: string
    });   
}

app.recieve_message = function(msg) {
    var plain = undefined;
    if (msg.name !== "system") {
        var encrypted = jsonFormatter.parse(msg.msg);
        var decrypted = CryptoJS.AES.decrypt(encrypted, app.key, { iv: encrypted.iv });
        plain = decrypted.toString(CryptoJS.enc.Utf8);
    } else {
        plain = msg.msg;
    }
    app.add_line(msg.name, plain);
}

app.is_command = function(msg) {
    return msg.indexOf('/') === 0;
}

app.on_command_search = function(up) {
    if(up) {
        if (app.commandIndex > 0) app.commandIndex--;
        $("#stdin").val(app.commands[app.commandIndex]);
    } else {
        if (app.commandIndex < app.commands.length) app.commandIndex++;
        $("#stdin").val(app.commands[app.commandIndex]);
    }
}

app.run_command = function(msg) {
    if(msg[msg.length - 1] !== " ") msg += " ";
    var match = /^\/(\w+)(.*)/g.exec(msg);
    var command = match[1];
    var args = match[2].trim().split(' ');

    switch(command) {
        case "join":
            app.join(args[0], args[1], args[2]);
            break;
        case "leave":
            app.leave();
            break;
        case "users":
            app.users();
            break;
        case "rooms":
            app.rooms();
            break;
        case "clear":
            app.clear();
            break;
        case "help":
            app.help();
            break;
        default:
            app.add_line("system", "Unrecognized command.")
    }
}

app.on_input = function() {
    var msg = $("#stdin").val();
    if(!msg && typeof msg !== "string") return;

    app.commands.push(msg);
    app.commandIndex++;

    if(app.is_command(msg)) {
        app.run_command(msg);
 
        $("#stdin").val('');
        return;
    }

    app.send_message(msg);
    $("#stdin").val('');
}

app.add_line = function(user, line) {
    $("#stdout").append('<li><span class="name">' + user + '&nbsp;|&nbsp;</span><span>' + line.replace(/<(?:.|\n)*?>/gm, '') + '</span></li>');
    $("#stdout")[0].scrollTop = $("#stdout")[0].scrollHeight;
}

app.start_up = function() {
    app.add_line("system", "welcome to cryptonode");
    app.add_line("system", "to start join a room with /join [username] [room] [password]");
    app.add_line("system", "to see available commands run /help");
}

app.clear = function() {
    $("#stdout").empty();
}

app.help = function() {
    app.add_line("system", "commands:")
    app.add_line("system", "/join [username] [room] [password] # joins the specifed room with the username and password provided. There must be no spaces in any of the parameters and they must be unquoted.")
    app.add_line("system", "i.e. /join supernomad woot sup3rs3cr3tp@55w0rd")
    app.add_line("system", "/leave # leaves the current room")
    app.add_line("system", "/rooms # lists available rooms")
    app.add_line("system", "/users # lists users in the currently joined room")
    app.add_line("system", "/clear # clears the console")
    app.add_line("system", "/help # lists available commands and help")
    app.add_line("system", "")
    app.add_line("system", "scroll through message and command history using up/down arrows.")
}

$("#stdin").keypress(function(e) {
    if(e.which == 13) {
        app.on_input();
    }
});

$("#stdin").keydown(function(e) {
    if (e.which == 38) {
        app.on_command_search(true);
    } else if (e.which == 40) {
        app.on_command_search(false);
    }
})

$("#send").click(function() {
    app.on_input();
});

app.start_up();
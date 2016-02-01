var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 8080,
	backlog = {},
	rooms = {};

app.use(express.static('app'));

io.on('connection', function(socket){
	var username = undefined,
		room = undefined;

	function leave() {
		if(room && username) {
			for (var i = 0; i < rooms[room].users.length; i++) {
				if(rooms[room].users[i] === username) {
					rooms[room].users.splice(i, 1);
					if(rooms[room].users.length === 0) delete rooms[room];
					break;
				}
			};
			io.to(room).emit('msg', {
				name: "system",
				room: room,
				msg: username + " has left the room."
			});
		}
	}

	socket.on('disconnect', function(){
		leave();
	});

	socket.on('join-room', function(msg){
		username = msg.name;
		room = msg.room;

		if(!rooms[msg.room]) rooms[msg.room] = {users: [msg.name], backlog: []};
		else rooms[msg.room].users.push(username);
		
		msg.name = "system";
		io.to(msg.room).emit('msg', msg);
    	socket.join(msg.room);
  	});

	socket.on('leave-room', function(msg){
		socket.leave(room);
		leave();
  	});

	socket.on('users', function() {
		socket.emit('msg', {
			name: "system",
			room: room,
			msg: "users: " + rooms[room].users.join(', ')
		});
	});

	socket.on('rooms', function() {
		var temp = []
		for(var room in rooms) {
			if (rooms.hasOwnProperty(room)) {
				temp.push(room);
			}
		}
		socket.emit('msg', {
			name: "system",
			room: "global",
			msg: "rooms: " + temp.join(', ')
		})
	})

	socket.on('history', function() {
		for (var i = 0; i < rooms[room].backlog.length; i++) {
			socket.emit('msg', rooms[room].backlog[i]);
		};
	});

  	socket.on('msg', function(msg) {
  		rooms[msg.room].backlog.push(msg);
  		io.to(msg.room).emit('msg', msg);
  	})
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});
## CrytpoNode - Encrypted Messenger

This project contains the start of an encrypted chat program written in Node.js and Html5. The application is designed using AES-256 to encrypt the data being sent over the wire. The actuall encryption key used for the AES encryption is never sent over the wire and the server has no knowledge or record of the information being transmitted. This key is generated off a user supplied password and generated salt, which is put through pbkdf2 for 1000 iterations.

### Description
This is in no way a finished product however it is the beginning of one please let me know of any glaring issues or features you would like added or removed. The idea of the project is to build a lightweight server/client platform that can be run and utilized on almost an hardware and software combination. To give people the opportunity to have their own encrypted chat networks for whatever it is they want to talk about. Privacy is a human right and extends to everyone in this world, and as such people should have access to a free way to ensure that right is upheald.

### Setup

Run the following commands:
```
git clone https://github.com/Supernomad/CryptoNode.git
cd CryptoNode/
npm install
node server.js
```

Then point your web browser at `localhost:8080`, and follow the on screen instructions.

### Server
The server is written in Node.js utilizing the socket-io library for realtime updates of information. The server tracks the users currently connected to the individual nodes as well as all available rooms.

Currently the port is defaulted to `8080` however can be overridden with the `PORT` environment variable.

### Client
The client uses jQuery to handle templates and properties, while using CryptoJS for encryption of individual messages. The client comes built in with a few commands that can be run to utilize the system, enumerated bellow:

```
/join [username] [room] [password] # joins the specifed room with the username and password provided.
/leave # leaves the current room.
/rooms # lists available rooms.
/users # lists users in the currently joined room.
/clear # clears the console.
/help # lists available commands and help.
```

You can also scroll through past commands issued during the current session with the up/down arrow keys.

### TODO
- Add url based node access.
- Implement notifications.
- Implement file sharing.
- Implement Video/Voice Chat.
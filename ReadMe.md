## CrytpoNode - Encrypted Messenger

This project contains the start of an encrypted chat program written in Node.js and Ember.js. The application is designed using SSL to encrypt the socket communications as well as AES-256 to encrypt the data being sent over the wire. The key used for the AES encryption is never sent over the wire and the server has no knowledge or record of the information being transmitted.

### Server
The server is written in Node.js utilizing the socket-io library for realtime updates of information. The server tracks the users currently connected to the individual nodes as well as the salt used for key generation for each node.

Currently the ports are setup to 8000 for the http port and 8001 for the https port. You can change the ports by going into Server.js and changing at the top of the file in "Var declerations"

    insecure = require('http').createServer(http).listen(8000),
    secure = require('https').createServer(creds, https).listen(8001),

to 

    insecure = require('http').createServer(http).listen(YourHttpPort),
    secure = require('https').createServer(creds, https).listen(YourSecureHttpsPort),

### Client
The client uses Ember.js to handle templates and properties, while using CryptoJS for encryption of individual messages. The key is generated using a shared salt and the PBKDF2 key generation scheme currently set at 1000 iterations. The password is pre shared  along with the node name for the chat.

### Description
This is in no way a finished product however it is the beginning of one please let me know of any glaring issues or features you would like added or removed. The idea of the project is to build a lightweight server/client platform that can be run and utilized on almost an hardware and software combination. To give people the opportunity to have their own encrypted chat networks for whatever it is they want to talk about. Privacy is a human right and extends to everyone in this world, and as such people should have access to a free way to ensure that right is upheald.

### TODO
- Add url based node access.
- decrease performance issues.
  - Issues revolve around large file transfers.
  - Also need to fix an issue of browser crashes due to memory overflows on large files.
- Implement notifications.
  - Both sound and popup style.
- Implement Video/Voice Chat.
  - Issues with crossbrowser support and encrypting the data streams. 
- .Net Client/Android Client/iOS Client/Unix Client.
This project contains the start of an ecnrypted chat program written in Node.js and Ember.js.

The server is written in Node.js utilizing the socket-io library for realtime updates of information.

The client uses Ember.js to handle templates and properties, while using CryptoJS for encryption of individual messages.

The application works based on a shared room and password. This allows the server to remain completely unaware of the password or what any of the encrypted messages mean.

This is in no way a finished product however it is the beginning of one please let me know of any glaring issues or features you would like added or removed.


In order to use this application you can visit https://69.248.167.141:8001/

If you would like to build your own application you will need to change only one line of the "Client.js" file which is the Socket-io connection line.

It will appear like so in the file: "Socket = io.connect('https://69.248.167.141:8001', { secure: true });"

This will need to be changed to "Socket = io.connect('Your Host', { secure: true });"

A short TODO list:

- Add in encrypted file sharing
- Add in encrypted Voice Chat
- Add in error handling(null data recieved etc...)
- Ensure best practices
- Add in more server security (length checking ensuring correct data values etc...)
- Add in client side validation and requirments
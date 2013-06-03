/// <reference path="./net.js"/>
/// <reference path="./stream.js"/>

var TLS = function () {
    var SecurePair = function () { };
    this.createServer = function (options, secureConnectionListener) {
        /// <param name='options' type='Object' />
        /// <param name='secureConnectionListener' value='secureConnectionListener(new TLS.CleartextStream())' optional='true' />
        /// <returns type='TLS.Server' />
        return new TLS.Server();
    };
    this.connect = function (port, host, options, secureConnectionListener) {
        /// <param name='port' type='Number' />
        /// <param name='host' type='String' optional='true' />
        /// <param name='options' type='Object' optional='true' />
        /// <param name='secureConnectionListener' value='secureConnectionListener(new TLS.CleartextStream())' optional='true' />
        /// <returns type='TLS.CleartextStream' />
        return new TLS.CleartextStream();
    };
    this.createSecurePair = function (credentials, isServer, requestCert, rejectUnauthorized) {
        /// <param name='credentials' type='Object' optional='true' />
        /// <param name='isServer' type='Boolean' optional='true' />
        /// <param name='requestCert' type='Boolean' optional='true' />
        /// <param name='rejectUnauthorized' type='Boolean' optional='true' />
        /// <returns type='SecurePair' />
        return new SecurePair();
    };
};

TLS.Server = function () {
    this.listen = function (port, host, callback) {
        /// <param name='port' type='Number' />
        /// <param name='host' type='String' optional='true' />
        /// <param name='callback' value='callback()' optional='true' />
    };
    this.close = function () { };
    this.address = function () {
        /// <returns type='Object' />
        return { port: 0, family: '', address: '' };
    };
    this.addContext = function (hostname, credentials) {
        /// <param name='hostname' type='String' />
        /// <param name='credentials' type='Object' />
    };
    this.maxConnections = new Number();
    this.connections = new Number();
};

TLS.Server.prototype = new Net.Server();

TLS.CleartextStream = function () {
    this.authorized = new Boolean();
    this.authorizationError = new String();
    this.getPeerCertificate = function () {
        /// <returns type='Object' />
        return new Object();
    };
    this.getCipher = function () {
        /// <returns type='Object' />
        return { name: '', version: '' };
    };
    this.address = function () {
        /// <returns type='Object' />
        return { port: 0, family: '', address: '' };
    };
    this.remoteAddress = new String();
    this.remotePort = new Number();
};

TLS.CleartextStream.prototype = new Stream();

/// <reference path="./tls.js"/>
/// <reference path="./http.js"/>

var HTTPS = function () {
    this.createServer = function (options, requestListener) {
        /// <param name='options' type='Object' />
        /// <param name='requestListener' value='requestListener(new HTTP.ServerRequest(),new HTTP.ServerResponse())' optional='true' />
        /// <returns type='HTTPS.Server' />
        return new HTTPS.Server();
    };
    this.request = function (options, callback) {
        /// <param name='options' type='Object' />
        /// <param name='callback' value='callback(new HTTP.ClientRequest())' optional='true'/>
        /// <returns type='HTTP.ClientRequest' />
        return new HTTP.ClientRequest();
    };
    this.get = function (options, callback) {
        /// <param name='options' type='Object' />
        /// <param name='callback' value='callback(new HTTP.ClientRequest())' optional='true'/>
        /// <returns type='HTTP.ClientRequest' />
        return new HTTP.ClientRequest();
    };
    this.globalAgent = new HTTPS.Agent();
};

HTTPS.Server = function () { };
HTTPS.Server.prototype = new TLS.Server();

HTTPS.Agent = function () { };


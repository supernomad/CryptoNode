/// <reference path='./events.js'/>
/// <reference path='./net.js'/>

var HTTP = function(){
    this.STATUS_CODES;
    this.createServer = function (requestListener) {
        /// <param name='requestListener' value='requestListener(new HTTP.ServerRequest(),new HTTP.ServerResponse())' optional='true' />
        /// <returns type='HTTP.Server' />
        return new HTTP.Server();
    };
    ////http.createClient = function(port, host){};deprecated 
    this.request = function (options, callback) {
        /// <param name='options' type='String' />
        /// <param name='callback' value='callback(new HTTP.ClientRequest())' />
        /// <returns type='HTTP.ClientRequest' />
        return new HTTP.ClientRequest();
    };
    this.get = function (options, callback) {
        /// <param name='options' type='String' />
        /// <param name='callback' value='callback(new HTTP.ClientRequest())' />
        /// <returns type='HTTP.ClientRequest' />
        return new HTTP.ClientRequest();
    };
    this.globalAgent = new HTTP.Agent();
};

HTTP.Server = function(){
    ////Event: 'request'
    ////Event: 'connection'
    ////Event: 'close'
    ////Event: 'checkContinue'
    ////Event: 'connect'
    ////Event: 'upgrade'
    ////Event: 'clientError'
    this.listen = function (port,hostname,backlog, callback) {
        /// <param name='port' type='Number' />
        /// <param name='hostname' type='String' optional='true' />
        /// <param name='backlog' type='Number' optional='true' />
        /// <param name='callback' value='callback(new HTTP.ServerRequest(),new HTTP.ServerResponse())' optional='true' />
    };
    //this.listen = function (path, callback) {
    //    /// <param name='path' type='String' />
    //    /// <param name='callback' value='callback(new HTTP.ServerRequest(),new HTTP.ServerResponse())' optional='true' />
    //};
    this.close = function (cb) {
        /// <param name='cb' value='cb()' optional='true' />
    };
    this.maxHeadersCount = new Number();
};
HTTP.Server.prototype = new Events.EventEmitter();

HTTP.ServerRequest = function(){
    ////Event: 'data'
    ////Event: 'end'
    ////Event: 'close'
    this.method = new String();
    this.url = new String();
    this.headers = new Object();
    this.trailers = new Object();
    this.httpVersion = new Number();
    this.httpVersionMajor = new Number();
    this.httpVersionMinor = new Number();
    this.setEncoding = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
    };
    this.pause = function(){};
    this.resume = function(){};
    this.connection = new Net.Socket();
};
HTTP.ServerRequest.prototype = new Events.EventEmitter();

HTTP.ServerResponse = function(){
    ////Event: 'close'
    this.writeContinue = function(){};
    this.writeHead = function (statusCode, reasonPhrase, headers) {
        /// <param name='statusCode' type='Number' />
        /// <param name='reasonPhrase' type='String' optional='true' />
        /// <param name='headers' type='Object' optional='true' />
    };
    this.statusCode = new Number();
    this.setHeader = function (name, value) {
        /// <param name='name' type='String' />
        /// <param name='value' type='Object' />
    };
    this.sendDate = new Boolean();
    this.getHeader = function (name) {
        /// <param name='name' type='String' />
        /// <returns type='String' />
        return new String();
    };
    this.removeHeader = function (name) {
        /// <param name='name' type='String' />
    };
    this.write = function (chunk, encoding) {
        /// <param name='chunk' type='String' />
        /// <param name='encoding' type='String' optional='true' />
    };
    this.addTrailers = function (headers) {
        /// <param name='headers' type='Object' />
    };
    this.end = function (data, encoding) {
        /// <param name='data' type='Object' optional='true' />
        /// <param name='encoding' type='String' optional='true' />
    };
};
HTTP.ServerResponse.prototype = new Events.EventEmitter();

HTTP.Agent = function(){
    this.maxSockets = new Number();
    this.sockets = new Array();
    this.requests = new Object();
};

HTTP.ClientRequest = function(){
    //Event 'response'
    //Event: 'socket'
    //Event: 'connect'
    //Event: 'upgrade'
    //Event: 'continue'
    this.write = function (chunk, encoding) {
        /// <param name='chunk' type='Object' />
        /// <param name='encoding' type='String' optional='true' />
    };
    this.end = function (data, encoding) {
        /// <param name='data' type='Object' />
        /// <param name='encoding' type='String' optional='true' />
    };
    this.abort = function () { };
    this.setTimeout = function (timeout, callback) {
        /// <param name='timeout' type='Number' />
        /// <param name='callback' value='callback()' optional='true' />
    };
    this.setNoDelay = function (noDelay) {
        /// <param name='noDelay' type='Boolean' optional='true' />
    };
    this.setSocketKeepAlive = function (enable, initialDelay) {
        /// <param name='enable' type='Boolean' optional='true' />
        /// <param name='initialDelay' type='Number' optional='true' />
    };
};
HTTP.ClientRequest.prototype = new Events.EventEmitter();

HTTP.ClientResponse = function () {
    //Event: 'data'
    //Event: 'end'
    //Event: 'close'
    this.statusCode = new Number();
    this.httpVersion = new Number();
    this.httpVersionMajor = new Number();
    this.httpVersionMinor = new Number();
    this.headers = new Object();
    this.trailers = new Object();
    this.setEncoding = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
    };
    this.pause = function () { };
    this.resume = function () { };
};
HTTP.ClientResponse.prototype = new Events.EventEmitter();

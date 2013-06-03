var Net = function () {
    this.createServer = function (options, connectionListener) {
        /// <param name='options' type='Object' optional='true' />
        /// <param name='connectionListener' value='connectionListener(new Net.Socket())' optional='true' />
        /// <returns type='Net.Server' />
        return new Net.Server();
    };
    this.connect = function (options, connectionListener) {
        /// <param name='options' type='Object' optional='true' />
        /// <param name='connectionListener' value='connectionListener(new Net.Socket())' optional='true' />
        /// <returns type='Net.Socket' />
        return new Net.Socket();
    };
    this.createConnection = function (options, connectionListener) {
        /// <param name='options' type='Object' optional='true' />
        /// <param name='connectionListener' value='connectionListener(new Net.Socket())' optional='true' />
        /// <returns type='Net.Socket' />
        return new Net.Socket();
    };
    this.isIP = function (input) {
        /// <param name='input' type='String' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.isIPv4 = function (input) {
        /// <param name='input' type='String' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.isIPv6 = function (input) {
        /// <param name='input' type='String' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.Socket = Net.Socket;
};

Net.Socket = function (options) {
    /// <param name='options' type='String' optional='true' />
    /// <returns type='Net.Socket' />

    this.connect = function (port, host, connectListener) {
        /// <param name='port' type='Number' />
        /// <param name='host' type='String' optional='true' />
        /// <param name='connectListener' value='connectListener(new Net.Socket())' optional='true' />
    };
    this.bufferSize = new Number();
    this.setEncoding = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
    };
    this.write = function (data, encoding, callback) {
        /// <param name='data' type='Object'/>
        /// <param name='encoding' type='String' optional='true' />
        /// <param name='connectListener' value='connectListener(new Net.Socket())' optional='true' />
    };
    this.end = function (data, encoding) {
        /// <param name='data' type='Object' optional='true'/>
        /// <param name='encoding' type='String' optional='true' />
    };
    this.destroy = function () { };
    this.pause = function () { };
    this.resume = function () { };
    this.setTimeout = function (timeout, callback) {
        /// <param name='timeout' type='Number' >milli second</param>
        /// <param name='callback' value='callback()' optional='true' />
    };
    this.setNoDelay = function (noDelay) {
        /// <param name='noDelay' type='Number' optional='true' />
    };
    this.setKeepAlive = function (enable, initialDelay) {
        /// <param name='enable' type='Boolean' optional='true' >default : false</param>
        /// <param name='initialDelay' type='Number' optional='true' />
    };
    this.address = function () {
    };
    this.remoteAddress = new Strin();
    this.remotePort = new Number();
    this.bytesRead = new Number();
    this.bytesWritten = new Number();

    if (this instanceof Net.Socket)
        return new Net.Socket();
    else
        return this;

    ////Event: 'connect'
    ////Event: 'data'
    ////Event: 'end'
    ////Event: 'timeout'
    ////Event: 'drain'
    ////Event: 'error'
    ////Event: 'close'
};

Net.Server = function () {
    this.listen = function (port, host, backlog, listeningListener) {
        /// <param name='port' type='Number' />
        /// <param name='host' type='String' optional='true' />
        /// <param name='backlog' type='Number' optional='true' />
        /// <param name='listeningListener' value='listeningListener()' optional='true' />
    };
    this.close = function (cb) {
        /// <param name='cb' value='cb()' optional='true' />
    };
    this.address = function () {
        /// <returns type='Object' />
        return { port: 0, family: '', address: '' };
    };
    this.maxConnections = new Number();
    this.connections = new Number();
    ////Event: 'listening'
    ////Event: 'connection'
    ////Event: 'close'
    ////Event: 'error'
};

Net.Server.prototype = new Net.Socket();

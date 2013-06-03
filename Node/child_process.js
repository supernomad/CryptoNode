/// <reference path="./buffer.js"/>
/// <reference path="./events.js"/>
/// <reference path="./stream.js"/>

var Child_Process = function () {
    this.spawn = function (command, args, options) {
        /// <param name='command' type='String' />
        /// <param name='args' type='Array' optional='true'/>
        /// <param name='options' type='Object' optional='true'/>
        /// <returns type='ChildProcess' />
        return new ChildProcess();
    };
    this.exec = function (command, options, callback) {
        /// <param name='command' type='String' />
        /// <param name='options' type='Object' optional='true'/>
        /// <param name='callback' value='callback(new Error(),new Buffer(),new Buffer())' />
        /// <returns type='HTTP.ClientRequest' />
        return new ChildProcess();
    };
    this.execFile = function (file, args, options, callback) {
        /// <param name='file' type='String' />
        /// <param name='args' type='Array'/>
        /// <param name='options' type='Object'/>
        /// <param name='callback' value='callback(new Error(),new Buffer(),new Buffer())' />
        /// <returns type='HTTP.ClientRequest' />
        return new ChildProcess();
    };
    this.fork = function (modulePath, args, options) {
        /// <param name='modulePath' type='String' />
        /// <param name='args' type='Array' optional='true'/>
        /// <param name='options' type='Object' optional='true'/>
        /// <returns type='HTTP.ClientRequest' />
        return new ChildProcess();
    };
};

var ChildProcess = function () {
    ////Event: 'exit'
    ////Event: 'close'
    ////Event: 'disconnect'
    ////Event: 'message'    this.stdin = new Stream();
    this.stdout = new Stream();
    this.stderr = new Stream();
    this.pid = new Number();
    this.kill = function (signal) {
        /// <param name='signal' type='String' optional='true' />
    };
    this.send = function (message, sendHandle) {
        /// <param name='message' type='Object' />
        /// <param name='sendHandle' type='Object' optional='true' />
    };
    this.disconnect = function () { };
}

ChildProcess.prototype = new Events.EventEmitter();

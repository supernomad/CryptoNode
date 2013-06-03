/// <reference path="./child_process.js"/>

var Cluster = function () {
    this.settings = new Object();
    this.isMaster = new Boolean();
    this.isWorker = new Boolean();
    this.setupMaster = function (settings) {
        /// <param name='settings' type='Object' optional='true' />
    };
    this.fork = function (env) {
        /// <param name='env' type='Object' optional='true' />
        /// <returns type='Cluster.Worker' />
        new Cluster.Worker();
    };
    this.disconnect = function (callback) {
        /// <param name='callback' value='callback()' optional='true' />
    };
    this.workers = new Object();
    ////Event: 'fork'
    ////Event: 'online'
    ////Event: 'listening'
    ////Event: 'disconnect'
    ////Event: 'exit'
    ////Event: 'setup'
};

Cluster.Worker = function () {
    this.uniqueID = new String();
    this.process = new ChildProcess();
    this.suicide = new Boolean();
    this.send = function (message, sendHandle) {
        /// <param name='message' type='Object' />
        /// <param name='sendHandle' type='Object' optional='true' />
    };
    this.destroy = function () { };
    this.disconnect = function () { };
    ////Event: 'message'
    ////Event: 'online'
    ////Event: 'listening'
    ////Event: 'disconnect'
    ////Event: 'exit'
};

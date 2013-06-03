/// <reference path="./events.js"/>
/// <reference path="./stream.js"/>

var Process = function () {
    this.stdout = new Stream();
    this.stderr = new Stream();
    this.stdin = new Stream();
    this.argv = new Array();
    this.execPath = new String();
    this.abort = function () { };
    this.chdir = function (directory) {
        /// <param name='directory' type='String' />
    };
    this.cwd = function () {
        /// <returns type='String' />
        return new String();
    };
    this.env = new String();
    this.exit = function (code) {
        /// <param name='code' type='Number' />
    };
    this.getgid = function () {
        /// <returns type='Number' />
        return new Number();
    };
    this.setgid = function (id) {
        /// <param name='id' type='Number' />
    };
    this.getuid = function () {
        /// <returns type='Number' />
        return new Number();
    };
    this.setuid = function (id) {
        /// <param name='id' type='Number' />
    };
    this.version = new Number();
    this.versions = new Number();
    this.config = new Object();
    this.installPrefix = new String();
    this.kill = function (pid, signal) {
        /// <param name='pid' type='Number' />
        /// <param name='signal' type='String' optional='true' />
    };
    this.pid = new Number();
    this.title = new String();
    this.arch = new String();
    this.platform = new String();
    this.memoryUsage = function () {
        /// <returns type='Number' />
        return new Number();
    };
    this.nextTick = function (callback) {
        /// <param name='callback' value='callback(n)' optional='true' />
    };
    this.umask = function (mask) {
        /// <param name='mask' type='Object' optional='true' />
        /// <returns type='Number' />
        return new Number();
    };
    this.uptime = function () {
        /// <returns type='Number' />
        return new Number();
    };
    this.hrtime = function () {
        /// <returns type='Array' />
        return new Array();
    };
};

Process.prototype = new Events.EventEmitter();
/// <reference path="./events.js"/>

var Domain = function () {
    this.create = function () {
        /// <returns type='Domain' />
        return new Domain();
    };
    this.run = function (fn) {
        /// <param name='fn' type='Function' />
    };
    this.members = new Array();
    this.add = function (emitter) {
        /// <param name='emitter' type='Events.EventEmitter' />
    };
    this.remove = function (emitter) {
        /// <param name='emitter' type='Events.EventEmitter' />
    };
    this.bind = function (cb) {
        /// <param name='cb' type='Function' />
        /// <returns type='Function' />
        return new Function();
    };
    this.intercept = function (cb) {
        /// <param name='cb' type='Function' />
        /// <returns type='Function' />
        return new Function();
    };
    this.dispose = function () { };
};
Domain.prototype = new Events.EventEmitter();


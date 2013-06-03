
var Events = {};

Events.EventEmitter = function () {
    this.addListener = function (event, listener) {
        /// <param name='event' type='String' />
        /// <param name='listener' type='Function' />
    };
    this.on = function (event, listener) {
        /// <param name='event' type='String' />
        /// <param name='listener' type='Function' />
    };
    this.once = function (event, listener) {
        /// <param name='event' type='String' />
        /// <param name='listener' type='Function' />
    };
    this.removeListener = function (event, listener) {
        /// <param name='event' type='String' />
        /// <param name='listener' type='Function' />
    };
    this.removeAllListeners = function (event) {
        /// <param name='event' type='String' />
    };
    this.setMaxListeners = function (n) {
        /// <param name='n' type='Number' />
    };
    this.listeners = function (event) {
        /// <param name='event' type='String' />
        /// <returns type='Array' />
        return new Array();
    };
    this.emit = function (event) {
        /// <param name='event' type='String' />
    };
};


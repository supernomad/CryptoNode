/// <reference path="./net.js"/>

var TTY = function(){
    this.isatty = function (fd) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <returns type='Boolean' />
        return new Boolean();
    };
    ////tty.setRawMode = function(mode){};Deprecated
    this.ReadStream = function () {
        this.isRaw = new Boolean();
        this.setRawMode = function (mode) {
            /// <param name='mode' type='Object' />
        };
    };
    this.ReadStream.prototype = new Net.Socket();

    this.WriteStream = function () {
        this.columns = new Number();
        this.rows = new Number();
        ////Event: 'resize'
    };
    this.WriteStream.prototype = new Net.Socket();
};

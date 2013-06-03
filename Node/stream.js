var Stream = function(){
    this.readable = new Boolean();
    this.setEncoding = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
    };
    this.pause = function () { };
    this.resume = function () { };
    this.destroy = function () { };
    this.pipe = function (destination, options) {
        /// <param name='destination' type='Stream' />
        /// <param name='options' type='Object' optional='true' />
    };

    this.writable = new Boolean();
    this.write = function (buffer) {
        /// <param name='buffer' type='Buffer' />
    };
    this.end = function (buffer) {
        /// <param name='buffer' type='Buffer' />
    };
    this.destroy = function () { };
    this.destroySoon = function () { };
};

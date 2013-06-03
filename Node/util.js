/// <reference path="./stream.js"/>

var Util = function () {
    this.format = function (format,args) {
        /// <param name='format' type='String' />
        /// <param name='args' type='Object' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.debug = function (string) {
        /// <param name='string' type='String' />
    };
    this.error = function (args) {
        /// <param name='args' type='Object' optional='true' />
    };
    this.puts = function (args) {
        /// <param name='args' type='Object' optional='true' />
    };
    this.print = function (args) {
        /// <param name='args' type='Object' optional='true' />
    };
    this.log = function (string) {
        /// <param name='string' type='String' />
    };
    this.inspect = function (object, showHidden, depth, colors) {
        /// <param name='object' type='Object' />
        /// <param name='showHidden' type='Boolean' optional='true'  />
        /// <param name='depth' type='Number' optional='true'  />
        /// <param name='colors' type='Boolean' optional='true'  />
        /// <returns type='String' />
        return new String();
    };
    this.isArray = function (object) {
        /// <param name='object' type='Object' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.isRegExp = function (object) {
        /// <param name='object' type='Object' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.isDate = function (object) {
        /// <param name='object' type='Object' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.isError = function (object) {
        /// <param name='object' type='Object' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
    this.pump = function (readableStream, writableStream, callback) {
        /// <param name='readableStream' type='Stream' />
        /// <param name='writableStream' type='Stream' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.inherits = function (constructor, superConstructor) {
        /// <param name='constructor' type='Object' />
        /// <param name='superConstructor' type='Object' />
    };
};


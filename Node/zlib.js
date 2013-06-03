/// <reference path="./stream.js"/>

var Zlib = function () {
    this.createGzip = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.Gzip' />
        return new Zlib.Gzip();
    };
    this.createGunzip = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.Gunzip' />
        return new Zlib.Gunzip();
    };
    this.createDeflate = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.Deflate' />
        return new Zlib.Deflate();
    };
    this.createInflate = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.Inflate' />
        return new Zlib.Inflate();
    };
    this.createDeflateRaw = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.DeflateRaw' />
        return new Zlib.DeflateRaw();
    };
    this.createInflateRaw = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.InflateRaw' />
        return new Zlib.InflateRaw();
    };
    this.createUnzip = function (options) {
        /// <param name='options' type='Object' optional='true' />
        /// <returns type='Zlib.Unzip' />
        return new Zlib.Unzip();
    };
    this.deflate = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.deflateRaw = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.gzip = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.gunzip = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.inflate = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.inflateRaw = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.unzip = function (buf, callback) {
        /// <param name='buf' type='Object' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
};

Zlib.Gzip = function () { };
Zlib.Gzip.prototype = new Stream();
Zlib.Gunzip = function () { };
Zlib.Gunzip.prototype = new Stream();
Zlib.Deflate = function () { };
Zlib.Deflate.prototype = new Stream();
Zlib.Inflate = function () { };
Zlib.Inflate.prototype = new Stream();
Zlib.DeflateRaw = function () { };
Zlib.DeflateRaw.prototype = new Stream();
Zlib.InflateRaw = function () { };
Zlib.InflateRaw.prototype = new Stream();
Zlib.InflateRaw = function () { };
Zlib.InflateRaw.prototype = new Stream();
Zlib.Unzip = function () { };
Zlib.Unzip.prototype = new Stream();


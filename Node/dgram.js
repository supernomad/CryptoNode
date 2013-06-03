/// <reference path="./buffer.js"/>

var Dgram = function () {
    this.Socket = function (type, callback) {
        /// <param name='type' type='String' />
        /// <param name='callback' value='callback(new Buffer(),new Object())' optional='true'  />
        /// <returns type='Dgram.ClientRequest' />
        return new Dgram.Socket();
    };
    this.createSocket = function (type, callback) {
        /// <param name='type' type='String' />
        /// <param name='callback' value='callback(new Buffer(),new Object())' optional='true'  />
        /// <returns type='Dgram.ClientRequest' />
        return new Dgram.Socket();
    };
};

Dgram.Socket = function (type, callback) {
    ////Event: 'message'
    ////Event: 'listening'
    ////Event: 'close'
    ////Event: 'error'
    this.send = function (buf, offset, length, port, address, callback) {
        /// <param name='buf' type='Buffer' />
        /// <param name='offset' type='Number' />
        /// <param name='length' type='Number' />
        /// <param name='port' type='Number' />
        /// <param name='address' type='String' />
        /// <param name='callback' value='callback(new Error(),new Number())' optional='true' />
    };
    this.bind = function (port, address) {
        /// <param name='port' type='Number' />
        /// <param name='address' type='String' optional='true' />
    };
    this.close = function () { };
    this.address = function () {
        /// <returns type='Object' />
        return new Object();
    };
    this.setBroadcast = function (flag) {
        /// <param name='flag' type='Boolean' />
    };
    this.setTTL = function (ttl) {
        /// <param name='ttl' type='Number' />
    };
    this.setMulticastTTL = function (ttl) {
        /// <param name='ttl' type='Number' />
    };
    this.setMulticastLoopback = function (flag) {
        /// <param name='flag' type='Boolean' />
    };
    this.addMembership = function (multicastAddress, multicastInterface) {
        /// <param name='multicastAddress' type='String' />
        /// <param name='multicastInterface' type='String' optional='true' />
    };
    this.dropMembership = function (multicastAddress, multicastInterface) {
        /// <param name='multicastAddress' type='String' />
        /// <param name='multicastInterface' type='String' optional='true' />
    };
};
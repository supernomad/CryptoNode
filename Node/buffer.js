var Buffer = function (args) {
    var buf = new Array();
    buf.write = function (string, offset, length, encoding) {
        /// <param name='string' type='String' />
        /// <param name='offset' type='Number' optional='true' />
        /// <param name='length' type='Number' optional='true' />
        /// <param name='encoding' type='String' optional='true' />
    };
    buf.copy = function (targetBuffer, targetStart, sourceStart, sourceEnd) {
        /// <param name='targetBuffer' type='Buffer' />
        /// <param name='targetStart' type='Number' optional='true' />
        /// <param name='sourceStart' type='Number' optional='true' />
        /// <param name='sourceEnd' type='Number' optional='true' />
    };

    //    buf.toString = function(encoding, start, end){};
    //    buf.slice = function(start, end){};

    buf.readUInt8 = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readUInt16LE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readUInt16BE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean'optional='true' />
        /// <returns type='Number' />
        return new Number();
    };
    buf.readUInt32LE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readUInt32BE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readInt8 = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readInt16LE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readInt16BE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readInt32LE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readInt32BE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readFloatLE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readFloatBE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readDoubleLE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.readDoubleBE = function (offset, noAssert) {
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
        /// <returns type='Number' />
        return new Number();
    };
    buf.writeUInt8 = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeUInt16LE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeUInt16BE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeUInt32LE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeUInt32BE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeInt8 = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeInt16LE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeInt16BE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeInt32LE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeInt32BE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeFloatLE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeFloatBE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeDoubleLE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.writeDoubleBE = function (value, offset, noAssert) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' />
        /// <param name='noAssert' type='Boolean' optional='true'/>
    };
    buf.fill = function (value, offset, end) {
        /// <param name='value' type='Number' />
        /// <param name='offset' type='Number' optional='true'/>
        /// <param name='end' type='Number' optional='true'/>
    };
    return buf;
};
Buffer.isBuffer = function (obj) {
    /// <param name='obj' type='Object' />
    /// <returns type='Boolean' />
    return new Boolean();
};
Buffer.byteLength = function (string, encoding) {
    /// <param name='string' type='String' />
    /// <param name='encoding' type='String' optional='true'/>
    /// <returns type='Boolean' />
    return new Number();
};
var INSPECT_MAX_BYTES = new Number(50);

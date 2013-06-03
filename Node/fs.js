/// <reference path="./stream.js"/>

var Fs = function () {
    this.rename = function (oldPath, newPath, callback) {
        /// <param name='oldPath' type='String' />
        /// <param name='newPath' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.renameSync = function (oldPath, newPath) {
        /// <param name='oldPath' type='String' />
        /// <param name='newPath' type='String' />
    };
    this.truncate = function (fd, len, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='len' type='Number' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.truncateSync = function (fd, len) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='len' type='Number' />
    };
    this.chown = function (path, uid, gid, callback) {
        /// <param name='path' type='String' />
        /// <param name='uid' type='Number' />
        /// <param name='gid' type='Number' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.chownSync = function (path, uid, gid) {
        /// <param name='path' type='String' />
        /// <param name='uid' type='Number' />
        /// <param name='gid' type='Number' />
    };
    this.fchown = function (fd, uid, gid, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='uid' type='Number' />
        /// <param name='gid' type='Number' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.fchownSync = function (fd, uid, gid) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='uid' type='Number' />
        /// <param name='gid' type='Number' />
    };
    this.lchown = function (path, uid, gid, callback) {
        /// <param name='path' type='String' />
        /// <param name='uid' type='Number' />
        /// <param name='gid' type='Number' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.lchownSync = function (path, uid, gid) {
        /// <param name='path' type='String' />
        /// <param name='uid' type='Number' />
        /// <param name='gid' type='Number' />
    };
    this.chmod = function (path, mode, callback) {
        /// <param name='path' type='String' />
        /// <param name='mode' type='Object' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.chmodSync = function (path, mode) {
        /// <param name='path' type='String' />
        /// <param name='mode' type='Object' />
    };
    this.fchmod = function (fd, mode, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='mode' type='Object' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.fchmodSync = function (fd, mode) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='mode' type='Object' />
    };
    this.lchmod = function (path, mode, callback) {
        /// <param name='path' type='String' />
        /// <param name='mode' type='Object' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.lchmodSync = function (path, mode) {
        /// <param name='path' type='String' />
        /// <param name='mode' type='Object' />
    };
    this.stat = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
        /// <returns type='Fs.Stats' />
        return new Fs.Stats();
    };
    this.lstat = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
        /// <returns type='Fs.Stats' />
        return new Fs.Stats();
    };
    this.fstat = function (fd, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='callback' value='callback(new Error())' optional='true' />
        /// <returns type='Fs.Stats' />
        return new Fs.Stats();
    };
    this.statSync = function (path) {
        /// <param name='path' type='String' />
        /// <returns type='Fs.Stats' />
        return new Fs.Stats();
    };
    this.lstatSync = function (path) {
        /// <param name='path' type='String' />
        /// <returns type='Fs.Stats' />
        return new Fs.Stats();
    };
    this.fstatSync = function (fd) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <returns type='Fs.Stats' />
        return new Fs.Stats();
    };
    this.link = function (srcpath, dstpath, callback) {
        /// <param name='srcpath' type='String' />
        /// <param name='dstpath' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.linkSync = function (srcpath, dstpath) {
        /// <param name='srcpath' type='String' />
        /// <param name='dstpath' type='String' />
    };
    this.symlink = function (destination, path, type, callback) {
        /// <param name='destination' type='String' />
        /// <param name='path' type='String' />
        /// <param name='type' type='String' optional='true'/>
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.symlinkSync = function (destination, path, type) {
        /// <param name='destination' type='String' />
        /// <param name='path' type='String' />
        /// <param name='type' type='String' optional='true'/>
    };
    this.readlink = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.readlinkSync = function (path) {
        /// <param name='path' type='String' />
        /// <returns type='String' />
        return new String();
    };
    this.realpath = function (path, cache, callback) {
        /// <param name='path' type='String' />
        /// <param name='cache' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error(),new String())'  />
    };
    this.realpathSync = function (path, cache) {
        /// <param name='path' type='String' />
        /// <param name='cache' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.unlink = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.unlinkSync = function (path) {
        /// <param name='path' type='String' />
    };
    this.rmdir = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.rmdirSync = function (path) {
        /// <param name='path' type='String' />
    };
    this.mkdir = function (path, mode, callback) {
        /// <param name='path' type='String' />
        /// <param name='mode' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.mkdirSync = function (path, mode) {
        /// <param name='path' type='String' />
        /// <param name='mode' type='String' optional='true' />
    };
    this.readdir = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' optional='true' />
    };
    this.readdirSync = function (path) {
        /// <param name='path' type='String' />
        /// <returns type='Array' />
        return new Array();
    };
    this.close = function (fd, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='callback' value='callback(new Error(),new Array())' optional='true' />
    };
    this.closeSync = function (fd) {
        /// <param name='fd' type='Number' />file descriptor</param>
    };
    this.open = function (path, flags, mode, callback) {
        /// <param name='path' type='String' />
        /// <param name='flags' type='String' />
        /// <param name='mode' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error(),new Number())' optional='true' />
    };
    this.openSync = function (path, flags, mode) {
        /// <param name='path' type='String' />
        /// <param name='flags' type='String' />
        /// <param name='mode' type='String' optional='true' />
        /// <returns type='Number' >file descriptor</returns>
        return new Number();
    };
    this.utimes = function (path, atime, mtime, callback) {
        /// <param name='path' type='String' />
        /// <param name='atime' type='Object' />
        /// <param name='mtime' type='Object' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.utimesSync = function (path, atime, mtime) {
        /// <param name='path' type='String' />
        /// <param name='atime' type='Object' />
        /// <param name='mtime' type='Object' />
    };
    this.futimes = function (fd, atime, mtime, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='atime' type='Object' />
        /// <param name='mtime' type='Object' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.futimesSync = function (fd, atime, mtime) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='atime' type='Object' />
        /// <param name='mtime' type='Object' />
    };
    this.fsync = function (fd, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.thisyncSync = function (fd) {
        /// <param name='fd' type='Number' />file descriptor</param>
    };
    this.write = function (fd, buffer, offset, length, position, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='buffer' type='Object' />
        /// <param name='offset' type='Number' />
        /// <param name='length' type='Number' />
        /// <param name='position' type='Number' />
        /// <param name='callback' value='callback(new Error(),new Number(),new Object())' optional='true' />
    };
    this.writeSync = function (fd, buffer, ofthiset, length, position) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='buffer' type='Object' />
        /// <param name='offset' type='Number' />
        /// <param name='length' type='Number' />
        /// <param name='position' type='Number' />
        /// <returns type='Number' ></returns>
        return new Number();
    };
    this.read = function (fd, buffer, ofthiset, length, position, callback) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='buffer' type='Object' />
        /// <param name='offset' type='Number' />
        /// <param name='length' type='Number' />
        /// <param name='position' type='Number' />
        /// <param name='callback' value='callback(new Error(),new Number(),new Object())' optional='true' />
    };
    this.readSync = function (args) {
        /// <param name='fd' type='Number' />file descriptor</param>
        /// <param name='buffer' type='Object' />
        /// <param name='offset' type='Number' />
        /// <param name='length' type='Number' />
        /// <param name='position' type='Number' />
        /// <returns type='Number' ></returns>
        return new Number();
    };
    this.readFile = function (filename, encoding, callback) {
        /// <param name='filename' type='String' />
        /// <param name='encoding' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error(),new Object())' optional='true' />
    };
    this.readFileSync = function (filename, encoding) {
        /// <param name='filename' type='String' />
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='Object' ></returns>
        return new Object();
    };
    this.writeFile = function (filename, data, encoding, callback) {
        /// <param name='filename' type='String' />
        /// <param name='data' type='Object' />
        /// <param name='encoding' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.writeFileSync = function (filename, data, encoding) {
        /// <param name='filename' type='String' />
        /// <param name='data' type='Object' />
        /// <param name='encoding' type='String' optional='true' />
    };
    this.appendFile = function (filename, data, encoding, callback) {
        /// <param name='filename' type='String' />
        /// <param name='data' type='Object' />
        /// <param name='encoding' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error())' optional='true' />
    };
    this.appendFileSync = function (filename, data, encoding) {
        /// <param name='filename' type='String' />
        /// <param name='data' type='Object' />
        /// <param name='encoding' type='String' optional='true' />
    };
    this.watchFile = function (filename, options, listener) {
        /// <param name='filename' type='String' />
        /// <param name='options' type='Object' optional='true' />
        /// <param name='listener' value='listener(new Object(),new Object())' />
    };
    this.unwatchFile = function (filename) {
        /// <param name='filename' type='String' />
    };
    this.watch = function (filename, options, listener) {
        /// <param name='filename' type='String' />
        /// <param name='options' type='Object' optional='true' />
        /// <param name='listener' value='listener(new Object(),new Object())' optional='true' />
        /// <returns type='Fs.FSWatcher' ></returns>
        return new Fs.FSWatcher();
    };
    this.exists = function (path, callback) {
        /// <param name='path' type='String' />
        /// <param name='callback' value='callback(new Boolean())' optional='true' />
    };
    this.existsSync = function (path) {
        /// <param name='path' type='String' />
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.createReadStream = function (path, options) {
        /// <param name='path' type='String' />
        /// <param name='options' type='Object' />
        /// <returns type='Fs.ReadStream' ></returns>
        return new Fs.ReadStream();
    };
    this.createWriteStream = function (path, options) {
        /// <param name='path' type='String' />
        /// <param name='options' type='Object' />
        /// <returns type='Fs.WriteStream' ></returns>
        return new Fs.WriteStream();
    };
}

Fs.Stats = function () {
    this.isFile() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.isDirectory() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.isBlockDevice() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.isCharacterDevice() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.isSymbolicLink() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.isFIFO() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
    this.isSocket() = function () {
        /// <returns type='Boolean' ></returns>
        return new Boolean();
    };
}

Fs.ReadStream = function () {
    /// <returns type='Stream' ></returns>
    return new Stream();
}

Fs.WriteStream = function () {
    /// <returns type='Stream' ></returns>
    return new Stream();
}

Fs.FSWatcher = function () {
    this.close = function () { };
}

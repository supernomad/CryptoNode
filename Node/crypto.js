/// <reference path="./buffer.js"/>

var Crypto = function () {
    this.createCredentials = function (details) {
        /// <param name='details' type='Object' />
        /// <returns type='Credentials' />
        return new Credentials();
    };
    this.createHash = function (algorithm) {
        /// <param name='algorithm' type='String' />
        /// <returns type='Hash' />
        return new Hash();
    };
    this.createHmac = function (algorithm, key) {
        /// <param name='algorithm' type='String' />
        /// <param name='key' type='String' />
        /// <returns type='Hmac' />
        return new Hmac;
    };
    this.createCipher = function (algorithm, password) {
        /// <param name='algorithm' type='String' />
        /// <param name='password' type='String' />
        /// <returns type='Cipher' />
        return new Cipher();
    };
    this.createCipheriv = function (algorithm, key, iv) {
        /// <param name='algorithm' type='String' />
        /// <param name='key' type='String' />
        /// <param name='iv' type='String' />
        /// <returns type='Cipher' />
        return new Cipher();
    };
    this.createDecipher = function (algorithm, password) {
        /// <param name='algorithm' type='String' />
        /// <param name='password' type='String' />
        /// <returns type='Decipher' />
        return new Decipher();
    };
    this.createDecipheriv = function (algorithm, key, iv) {
        /// <param name='algorithm' type='String' />
        /// <param name='key' type='String' />
        /// <param name='iv' type='String' />
        /// <returns type='Decipher' />
        return new Decipher();
    };
    this.createSign = function (algorithm) {
        /// <param name='algorithm' type='String' />
        /// <returns type='Signer' />
        return new Signer();
    };
    this.createVerify = function (algorithm) {
        /// <param name='algorithm' type='String' />
        /// <returns type='Verify' />
        return new Verify();
    }
    this.createDiffieHellman = function (prime, encoding) {
        /// <param name='prime' type='String' />
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='DiffieHellman' />
        return new DiffieHellman();
    };
    this.getDiffieHellman = function (group_name) {
        /// <param name='group_name' type='String' />
        /// <returns type='DiffieHellman' />
        return new DiffieHellman();
    };
    this.pbkdf2 = function (password, salt, iterations, keylen, callback) {
        /// <param name='password' type='String' />
        /// <param name='salt' type='Number' />
        /// <param name='iterations' type='Number' />
        /// <param name='keylen' type='Number' />
        /// <param name='callback' value='callback(new Error(),new Object())' />
        /// <returns type='Object' />
        return new Object();
    };
    this.randomBytes = function (size, callback) {
        /// <param name='keylen' type='String' />
        /// <param name='callback' value='callback(new Error(),new Buffer())' optional='true' />
        /// <returns type='Buffer' />
        return new Buffer();
    };
};

var Credentials = function () { }

var Hash = function () {
    this.update = function (data, input_encoding) {
        /// <param name='data' type='String' />
        /// <param name='input_encoding' type='String' optional='true' />
    };
    this.digest = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
};

var Hmac = function () {
    this.update = function (data) {
        /// <param name='data' type='String' />
    };
    this.digest = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
};

var Cipher = function () {
    this.update = function (data, input_encoding, output_encoding) {
        /// <param name='data' type='String' />
        /// <param name='input_encoding' type='String' optional='true' />
        /// <param name='output_encoding' type='String' optional='true' />
    };
    this.final = function (output_encoding) {
        /// <param name='output_encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.setAutoPadding = function (auto_padding) {
        /// <param name='auto_padding' type='Boolean' />
    };
};

var Decipher = function () {
    this.update = function (data, input_encoding, output_encoding) {
        /// <param name='data' type='String' />
        /// <param name='input_encoding' type='String' optional='true' />
        /// <param name='output_encoding' type='String' optional='true' />
    };
    this.final = function (output_encoding) {
        /// <param name='output_encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.setAutoPadding = function (auto_padding) {
        /// <param name='auto_padding' type='Boolean' />
    };
};

var Signer = function () {
    this.update = function (data) {
        /// <param name='data' type='String' />
    };
    this.sign = function (private_key, output_format) {
        /// <param name='private_key' type='String' optional='true' />
        /// <param name='output_encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
};

var Verifier = function () {
    this.update = function (data) {
        /// <param name='data' type='String' />
    };
    this.verify = function (object, signature, signature_format) {
        /// <param name='object' type='Object' />
        /// <param name='signature' type='String' />
        /// <param name='signature_format' type='String' optional='true' />
        /// <returns type='Boolean' />
        return new Boolean();
    };
};

var DiffieHellman = function () {
    this.generateKeys = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
    };
    this.computeSecret = function (other_public_key, input_encoding, output_encoding) {
        /// <param name='other_public_key' type='String' />
        /// <param name='input_encoding' type='String' optional='true' />
        /// <param name='output_encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.getPrime = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.getGenerator = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.getPublicKey = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.getPrivateKey = function (encoding) {
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.setPublicKey = function (public_key, encoding) {
        /// <param name='public_key' type='String' />
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
    this.setPrivateKey = function (public_key, encoding) {
        /// <param name='public_key' type='String' />
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String' />
        return new String();
    };
};

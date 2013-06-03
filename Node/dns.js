var DNS = function(){
    this.lookup = function (domain, family, callback) {
        /// <param name='domain' type='String' />
        /// <param name='family' type='Number' optional='true' />
        /// <param name='callback' value='callback(new Error(),new String(),new Number())' />
    };
    this.resolve = function (domain, rrtype, callback) {
        /// <param name='domain' type='String' />
        /// <param name='rrtype' type='String' optional='true' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolve4 = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolve6 = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolveMx = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolveTxt = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolveSrv = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolveNs = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.resolveCname = function (domain, callback) {
        /// <param name='domain' type='String' />
        /// <param name='callback' value='callback(new Error(),new Array())' />
    };
    this.reverse = function (ip, callback) {
        /// <param name='ip' type='String' />
        /// <param name='callback' value='callback(new Error(),new String())' />
    };
    ////dns.NODATA;
    ////dns.FORMERR;
    ////dns.SERVFAIL;
    ////dns.NOTFOUND;
    ////dns.NOTIMP;
    ////dns.REFUSED;
    ////dns.BADQUERY;
    ////dns.BADNAME;
    ////dns.BADFAMILY;
    ////dns.BADRESP;
    ////dns.CONNREFUSED;
    ////dns.TIMEOUT;
    ////dns.EOF;
    ////dns.FILE;
    ////dns.NOMEM;
    ////dns.DESTRUCTION;
    ////dns.BADSTR;
    ////dns.BADFLAGS;
    ////dns.NONAME;
    ////dns.BADHINTS;
    ////dns.NOTINITIALIZED;
    ////dns.LOADIPHLPAPI;
    ////dns.ADDRGETNETWORKPARAMS;
    ////dns.CANCELLED;
};

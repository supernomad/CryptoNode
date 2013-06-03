var VM = function () {
    this.runInThisContext = function (code, filename) {
        /// <param name='code' type='String' />
        /// <param name='filename' type='String' optional='true' />
        /// <returns type='Object' />
        return new Object();
    };
    this.runInNewContext = function (code, sandbox, filename) {
        /// <param name='code' type='String' />
        /// <param name='sandbox' type='Object' optional='true' />
        /// <param name='filename' type='String' optional='true' />
        /// <returns type='Object' />
        return new Object();
    };
    this.runInContext = function (code, context, filename) {
        /// <param name='code' type='String' />
        /// <param name='context' type='Object' />
        /// <param name='filename' type='String' optional='true' />
        /// <returns type='Object' />
        return new Object();
    };
    this.createContext = function (initSandbox) {
        /// <param name='initSandbox' type='Object' optional='true' />
        /// <returns type='Object' />
        return new Object();
    };
    this.createScript = function (code, filename) {
        /// <param name='code' type='String' />
        /// <param name='filename' type='String' optional='true' />
        /// <returns type='VM.Script' />
        return new VM.Script();
    };
};

VM.Script = function () {
    script.runInThisContext = function () { };
    script.runInNewContext = function (sandbox) {
        /// <param name='options' type='Object' />
    };
};

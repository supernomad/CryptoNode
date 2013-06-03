/// <param name='hostname' type='String' optional='true' />
/// <param name='callback' value='callback(new HTTP.ClientRequest())' />
/// <returns type='HTTP.ClientRequest' />

var Console = function(){
    this.log = function (data) {
        /// <param name='data' type='String' optional='true' />
    };
    this.info = function (data) {
        /// <param name='data' type='String' optional='true' />
    };
    this.error = function (data) {
        /// <param name='data' type='String' optional='true' />
    };
    this.warn = function (data) {
        /// <param name='data' type='String' optional='true' />
    };
    this.dir = function (obj) {
        /// <param name='obj' type='Object'/>
    };
    this.time = function (label) {
        /// <param name='label' type='String' />
    };
    this.timeEnd = function (label) {
        /// <param name='label' type='String' />
    };
    this.trace = function (label) {
        /// <param name='label' type='String' />
    };
    this.assert = function (expression, message) {
        /// <param name='expression' type='Object'>truthy</param>
        /// <param name='message' type='String' optional='true' />
    };
};

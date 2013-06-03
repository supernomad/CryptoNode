var Readline = function(){
    this.createInterface = function (options) {
        /// <param name='options' type='Object' />
        /// <returns type='Readline.Interface' />
        return new Readline.Interface();
    };
    ////Event: 'line'
    ////Event: 'pause'
    ////Event: 'resume'
    ////Event: 'close'
    ////Event: 'SIGINT'
    ////Event: 'SIGTSTP'
    ////Event: 'SIGCONT'
};

Readline.Interface = function(){
    this.setPrompt = function (prompt, length) {
        /// <param name='prompt' type='Object' />
        /// <param name='length' type='Nember' />
    };
    this.prompt = function (preserveCursor) {
        /// <param name='preserveCursor' type='Boolean' optional='true' />
    };
    this.question = function (query, callback) {
        /// <param name='query' type='String' />
        /// <param name='callback' value='callback(new String())' />
    };
    this.pause = function (){};
    this.resume = function (){};
    this.close = function (){};
    this.write = function (data, key) {
        /// <param name='data' type='Object'  />
        /// <param name='key' type='Object' optional='true' />
    };
};

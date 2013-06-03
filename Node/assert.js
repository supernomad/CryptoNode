var Assert = function () {
    var assert = function (value, message) {
        /// <param name='value' type='Object'>truthy</param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.fail = function (actual, expected, message, operator) {
        /// <summary>throw 'actual operator expected'</summary>
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' />
        /// <param name='operator' type='String' />
    };
    assert.ok = function (value, message) {
        /// <param name='value' type='Object'>truthy</param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.equal = function (actual, expected, message) {
        /// <summary>(actual == expected) == true</summary>
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.notEqual = function (actual, expected, message) {
        /// <summary>(actual == expected) == false</summary>
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.deepEqual = function (actual, expected, message) {
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.notDeepEqual = function (actual, expected, message) {
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.strictEqual = function (actual, expected, message) {
        /// <summary>(actual === expected) == false</summary>
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.notStrictEqual = function (actual, expected, message) {
        /// <summary>(actual !== expected) == false</summary>
        /// <param name='actual' type='Object'></param>
        /// <param name='expected' type='Object'></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.throws = function (block, error, message) {
        /// <param name='block' type='Object'></param>
        /// <param name='error' type='Object' optional='true' ></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.doesNotThrow = function (block, error, message) {
        /// <param name='block' type='Object'></param>
        /// <param name='error' type='Object' optional='true' ></param>
        /// <param name='message' type='String' optional='true' />
    };
    assert.ifError = function (value) {
        /// <param name='value' type='Object'></param>
    };
    return assert;
};

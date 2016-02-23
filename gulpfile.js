'use strict';

var gulp = require('gulp'),
    plugins = {},
    params = {};

var spawn = require('child_process').spawn;
plugins.exec = function(cmd, args, cb) {
    var proc = spawn(cmd, args);
    proc.stdout.on('data', function(stdout) {
        if(stdout) console.log(stdout);
    });

    proc.stderr.on('data', function(stderr) {
        if(stderr) console.error(stderr);
    });

    proc.on('close', function(code) {
        if(code != 0) cb(new Error('Command: "' + cmd + ' ' + args.join(' ') + '" exited with exit code: ' + code));
        else cb();
    });
};

plugins.async = require('async');
plugins.path = require('path');
plugins.runSequence = require('run-sequence');

plugins.istanbul = require('gulp-istanbul');
plugins.mocha = require('gulp-mocha');
plugins.plumber = require('gulp-plumber');

params.cli = require('minimist')(process.argv.slice(2), {});
params.outputPath = 'artifacts/';
params.coveragePath = 'coverage/';
params.testReportsPath = 'test_reports/';

// Get Tasks
require('./build_tasks/api_tasks')(gulp, plugins, params);
require('./build_tasks/app_tasks')(gulp, plugins, params);

gulp.task('clean:paths', function(cb) {
    plugins.async.each([
        params.outputPath,
        params.coveragePath,
        params.testReportsPath
    ], function(path, finished) {
        plugins.exec('rm', ['-rf', plugins.path.join(__dirname, path)], finished);
    }, cb);
});

gulp.task('build:paths', function(cb) {
    plugins.async.each([
        params.outputPath,
        params.coveragePath,
        params.testReportsPath
    ], function(path, finished) {
        plugins.exec('mkdir', [plugins.path.join(__dirname, path)], finished);
    }, cb);
});

gulp.task('default', [], function(cb) {
    plugins.runSequence('clean:paths', 'build:paths', function() {
        cb();
    });
});
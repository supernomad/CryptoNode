'use strict';

var gulp = require('gulp'),
	spawn = require('child_process').spawn,
	plugins = {},
	args = {};

plugins.exec = function(cmd, args, cb) {
	var proc = spawn(cmd, args);
	proc.stdout.on('data', function(stdout) {
		if(stdout) console.log(stdout);
	});

	proc.stderr.on('data', function(stderr) {
		if(stderr) console.error(stderr);
	});

	proc.on('close', function(code) {
		if(code != 0) cb(new Error('Command: ' + cmd + ' ' + args.join(' ') + ' exited with exit code: ' + code));
		else cb();
	});
}
plugins.del = require('del');
plugins.async = require('async');
plugins.path = require('path');
plugins.runSequence = require('run-sequence');
plugins.fs = require('fs');

plugins.mocha = require('gulp-mocha');
plugins.istanbul = require('gulp-istanbul');
plugins.plumber = require('gulp-plumber');

args.outputPath = 'artifacts/';
args.coveragePath = 'coverage/';
args.testReportsPath = 'test_reports/'
args.params = require('yargs').argv;

// Get Tasks
require('./build/app_tasks')(gulp, plugins, args);
require('./build/api_tasks')(gulp, plugins, args);
require('./build/automation_tasks')(gulp, plugins, args);

gulp.task('clean:paths', function() {
	return plugins.del([
		args.outputPath,
		args.coveragePath,
		args.testReportsPath
	]);
});

gulp.task('build:paths', function(cb) {
	plugins.async.each([
		args.outputPath,
		args.coveragePath,
		args.testReportsPath
	], function(path, finished) {
		plugins.exec('mkdir', [plugins.path.join(__dirname, path)], finished);
	}, cb);
});

gulp.task('default', [], function(cb) {
	plugins.runSequence('clean:paths', 'build:paths', function() {
		cb();
	});
});
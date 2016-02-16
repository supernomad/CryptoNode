'use strict';

var gulp = require('gulp');

var plugins = {};
plugins.exec = require('child_process').exec;
plugins.del = require('del');
plugins.async = require('async');
plugins.path = require('path');
plugins.runSequence = require('run-sequence');
plugins.fs = require('fs');

plugins.mocha = require('gulp-mocha');
plugins.istanbul = require('gulp-istanbul');
plugins.plumber = require('gulp-plumber');

var args = {};
args.outputPath = 'artifacts/';
args.coveragePath = 'coverage/';
args.testReportsPath = 'test_reports/'
args.params = require('yargs').argv;

// Get Tasks
require('./build/app_tasks')(gulp, plugins, args);
require('./build/api_tasks')(gulp, plugins, args);
require('./build/automation_tasks')(gulp, plugins, args);

// Encompasing tasks, i.e. Full build, test, package

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
		var cmd = 'mkdir ' + plugins.path.join(__dirname, path);
		plugins.exec(cmd, function(err, stdout, stderr) {
			if(stdout) console.log(stdout);
			if(stderr) console.error(stderr);
			finished(err);
		})
	}, cb);
});

gulp.task('default', [], function(cb) {
	plugins.runSequence(['clean:paths', 'build:paths'], function() {
		cb();
	});
});
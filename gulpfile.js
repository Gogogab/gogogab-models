'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
var growl = require('gulp-notify-growl');

// Tasks ---

gulp.task('lint', function () {
  return gulp.src(['index.js', 'src/**/*.js'])
    .pipe(jshint('./.jshintrc'))
    .pipe(jscs())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

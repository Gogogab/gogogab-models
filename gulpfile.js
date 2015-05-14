'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('jshint-stylish');

// Tasks ---

gulp.task('lint', function () {
  return gulp.src('src/**/*.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jscs())
    .pipe(jshint.reporter(stylish));
});

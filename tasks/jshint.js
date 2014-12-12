// JS hint task
'use strict';

var config = require('../gulpconfig');
var jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

module.exports = function(gulp) {
    gulp.task('jshint', function() {
        return gulp.src(config.source.jshint)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });
};

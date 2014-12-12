'use strict';

/* Bower */
/*
Comannds:
  $ bower install --save plugin-name
  $ gulp bower
*/

var config = require('../gulpconfig');
var wiredep = require('wiredep').stream;

module.exports = function(gulp) {
    gulp.task('bower', function() {
        gulp.src(config.source.html)
            .pipe(wiredep())
            .pipe(gulp.dest(config.dest.html));
    });
};

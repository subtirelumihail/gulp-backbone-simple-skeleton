'use strict';

var browserSync = require('browser-sync');
var config = require('../gulpconfig');

// watch for JS changes
module.exports = function(gulp) {
    gulp.task('watch', function() {

        gulp.watch(config.source.js, ['browserify', 'jshint', browserSync.reload]);

        // watch for SASS changes
        gulp.watch(config.source.sass, ['sass', browserSync.reload]);

        // watch for IMAGES changes
        //gulp.watch(config.source.img, ['img', browserSync.reload]);

        // watch for FONT changes
        gulp.watch(config.source.font, ['fonts', browserSync.reload]);

        // watch for React changes
        gulp.watch(config.source.browserify, ['browserify', browserSync.reload]);

        // watch for HTML changes
        gulp.watch(config.source.html, ['html', browserSync.reload]);
    });
};

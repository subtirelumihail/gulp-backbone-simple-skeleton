'use strict';

var browserSync = require('browser-sync');
var config = require('../gulpconfig');

//Config the server
var server = {
    start: function() {
        browserSync({
            server: {
                baseDir: './' + config.build + '/'
            }
        });
    }
};

module.exports = function(gulp, argv) {
    // Main task
    gulp.task('default', [
        'browserify',
        'sass',
        'jshint',
        'img',
        'fonts',
        'html'
    ], function() {
        if (!argv.production) {
            server.start();
            gulp.start('watch');
        }
    });
};

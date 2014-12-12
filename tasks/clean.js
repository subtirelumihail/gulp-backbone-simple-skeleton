'use strict';

var del = require('del');
var config = require('../gulpconfig');

// Deletes the assets folder
module.exports = function(gulp) {
    gulp.task('clean', function() {
        del(config.build, function() {
            console.log('Files deleted');
        });
    });
};

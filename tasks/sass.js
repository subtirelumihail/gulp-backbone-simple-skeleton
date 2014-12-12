'use strict';

var config = require('../gulpconfig');
var sass = require('gulp-ruby-sass'),
    autoprefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp, argv) {


    var compress = argv.production ? 'compressed' : 'nested';

    gulp.task('sass', function() {
        return gulp.src(config.source.sass)
            .pipe(sass({
                sourcemapPath: './',
                bundleExec: true,
                require: ['susy'],
                style: compress
            }))
            .on('error', function(err) {
                console.log(err.message);
            })
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(autoprefix('last 2 versions', '> 2%'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest.css))
    });
};

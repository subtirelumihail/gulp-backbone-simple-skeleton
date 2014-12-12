var buildFolder = 'build';
var srcFolder = 'src';

Config = {
    bundles: { //Bundle names
        js: 'bundle.js',
        template: 'components.js',
        css: 'styles.css'
    },

    appEntry: './' + srcFolder + '/js/start.js',

    build: buildFolder,
    src: srcFolder,

    source: {
        html: [srcFolder + '/*.html'],
        img: [srcFolder + '/img/**/*', srcFolder + '/img/*'],
        sass: [srcFolder + '/sass/**/*.scss', srcFolder + '/sass/*.scss'],
        css: ['libs/*.css', srcFolder + '/css/libs/*.css', srcFolder + '/css/**/*.css', srcFolder + '/css/*.css'],
        font: [srcFolder + '/fonts/*'],
        jshint: [srcFolder + '/js/*.js', srcFolder + '/js/**/*.js'],
        browserify: [srcFolder + '/js/*.js', srcFolder + '/js/**/*.js', srcFolder + '/js/templates/*.html', srcFolder + '/js/templates/**/*.html']
    },

    dest: {
        defaults: {
            css: srcFolder + '/css/',
            sass: srcFolder + '/sass/'
        },

        img: buildFolder + '/img/',
        js: buildFolder + '/js/',
        css: buildFolder + '/css/',
        sass: buildFolder + '/sass/',
        font: buildFolder + '/fonts/',
        html: buildFolder + '/',
        icons: srcFolder + '/js/api/icons.js'
    }
}

module.exports = Config;

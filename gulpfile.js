require('pretty-error').start();

//Global config
global.config = require('./gulpconfig');

// include gulp
var gulp = require('gulp'); 
var requireDir = require('require-dir');
var dir = requireDir('./tasks');
var argv = require('yargs').argv;

for (var i in dir) {
    dir[i](gulp, argv);
}







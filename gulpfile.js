"use strict";

var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    concat  = require('gulp-concat'),
    cssmin  =require('gulp-cssmin'),
    rename  = require('gulp-rename'),
    minifyjs = require('gulp-js-minify');

gulp.task('sass', function() {
    return gulp.src('./style/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./style'));
});

gulp.task('script', function(){
    gulp.src('./script/main.js')
        .pipe(minifyjs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./script/'));
});

gulp.task('cssmin', ['sass'], function(){
    gulp.src('./style/style.css')
        .pipe(cssmin())
        .pipe((rename({suffix: '.min'})))
        .pipe(gulp.dest('./style'))
});

gulp.task('watch', function(){
    gulp.watch('./style/style.scss', ['sass', 'cssmin'])
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename('styles-unminified.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(rename('styles.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch(['./sass/*.scss'], ['css']);
    gulp.watch(['./sass/common/*.scss'], ['css']);
    gulp.watch(['./sass/pages/*.scss'], ['css']);
});

gulp.task('default', ['css']);
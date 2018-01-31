var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var sass = require('gulp-sass');

gulp.task('server', ['sass'], function() {
    browserSync.init({
    	server: { baseDir: './app/'}
    });
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    // gulp.watch('./app/less/**/*.less', ['less']);
    gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('less', function() {
    return gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('./app/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);

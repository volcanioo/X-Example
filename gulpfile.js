var gulp = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var JSDir = 'X-Example/src/javascripts/';
var sassDir = 'X-Example/src/stylesheets/scss';
var cssDir = 'X-Example/src/stylesheets/css';
var sassFiles = [
  sassDir + "/index.scss"
];
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "X-Example"
        }
    });
});
gulp.task('css', function () {
    return gulp.src(sassFiles)
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest(cssDir))
        .pipe(browserSync.stream());
});
gulp.task('watch', function () {
    gulp.watch(sassDir + '/*.scss', ['css']);
    gulp.watch("X-Example/*.html").on("change", browserSync.reload);
    gulp.watch(JSDir + "/*.js").on("change", browserSync.reload);
});
gulp.task('default', ['css', 'watch', 'browser-sync']);

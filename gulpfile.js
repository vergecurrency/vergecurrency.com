var gulp = require('gulp');
var webserver = require('gulp-webserver');

var paths = {
  dist: 'out',
};

gulp.task('serve', function () {
  return gulp.src(paths.dist)
    .pipe(webserver({
      port: 3001,
    }));
});

gulp.task('default', ['serve']);

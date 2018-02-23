const gulp = require('gulp');
const webserver = require('gulp-webserver');

const paths = {
  dist: 'out',
};

gulp.task('serve', () => (
  gulp.src(paths.dist)
    .pipe(webserver({
      port: 3001,
    }))
));

gulp.task('default', ['serve']);

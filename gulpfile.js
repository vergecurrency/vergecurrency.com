const gulp = require('gulp');
const webserver = require('gulp-webserver');

const paths = {
  dist: 'docs',
};

gulp.task('serve', () => (
  gulp.src(paths.dist)
    .pipe(webserver({
      port: 3001,
    }))
));

gulp.task('default', ['serve']);

const gulp = require('gulp');
const webserver = require('gulp-webserver');

const paths = {
  dist: 'docs',
};

function serve() {
  return gulp.src(paths.dist).pipe(
    webserver({
      port: 3001,
    })
  );
}

exports.serve = serve;
exports.default = gulp.series(serve);

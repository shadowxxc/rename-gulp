var gulp = require('gulp');

var rename = require('gulp-rename');

gulp.task('scss', function () {
  gulp.src('./a/*.md')
    .pipe(rename(function (path) {
      path.extname = '.txt';
    }))
    .pipe(gulp.dest('./a/'));
});



gulp.task('default', ['scss'], function () {
  console.log('Íê³É!');
});

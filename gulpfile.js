var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins'),
  browserSync = require('browser-sync').create();

gulp.task('style', function() {
  return gulp.src('./css/index_main.css').pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])).pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  watch('./css', function() {
    gulp.start('style');
  });
});

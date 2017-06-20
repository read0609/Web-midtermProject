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
  return gulp.src('./css/style.css').pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])).pipe(gulp.dest('./'));
});

gulp.task('cssInjectStyle', ['style'], function() {
  return gulp.src('./style.css').pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });
  watch('./*.html', function() {
    browserSync.reload();
  });
  watch('./css', function() {
    gulp.start('cssInjectStyle');
    browserSync.reload();
  });
});

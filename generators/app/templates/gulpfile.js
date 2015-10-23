var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    neat = require('node-neat');

var config = {
  styles: {
    scss: './src/scss/',
    css: './dist/css/',
    libs: [
      bourbon.includePaths,
      neat.includePaths[1]
    ],
    outputStyle: 'compact'
  }
}

gulp.task('styles:build', function () {
  return gulp.src(config.styles.scss + 'styles.scss')
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: config.styles.outputStyle,
      includePaths: config.styles.libs
    }))
    .pipe(gulp.dest(config.styles.css));
})


gulp.task('default', ['styles:build'], function () {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch([config.styles.scss + '**/*'], ['styles:build']);
});

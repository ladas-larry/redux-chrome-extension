var gulp = require('gulp');
var del = require('del');
var livereload = require('gulp-livereload');
var notifier = require('node-notifier');
var zip = require('gulp-zip');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var watchify = require('watchify');

var paths = {
  scripts: ['src/scripts/**/*.js', 'src/scripts/**/**/*.js']
};

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(paths.scripts, ['scripts']);
});

//clean build directory
gulp.task('clean', function (cb) {
  del([
    'build/*'
  ], cb);
});


//build distributable
gulp.task('release', function () {
  var manifest = require('./app/manifest'),
    distFileName = manifest.name + ' v' + manifest.version + '.zip';
  return gulp.src('./app/**')
    .pipe(zip(distFileName))
    .pipe(gulp.dest('./dist'));
});


function bundle(inputFile, outputDir, outputFile) {
  var options = {};
  for (var opt in watchify.args) {
    options[opt] = watchify.args[opt];
  }
  options.debug = true;
  var b = watchify(browserify(inputFile, options).transform(babelify));
  b.on('update', function () {
    bundle(inputFile, outputDir, outputFile);
  });
  b.on('log', gutil.log);
  return b.bundle()
    // log errors if they happen
    .on('error', function (e) {
      gutil.log('Browserify Error', e.message);
      notifier.notify({
        'title': 'Browserify Error',
        'message': e.message
      });
    })
    .pipe(source(outputFile))
    .pipe(gulp.dest(outputDir))
    .pipe(livereload());
}


gulp.task('js', function () {
  livereload.listen();
  bundle('./src/scripts/background.js', './app/scripts/', 'background.js');
  bundle('./src/scripts/popup.js', './app/scripts/', 'popup.js');
  bundle('./src/scripts/content.js', './app/scripts/', 'content.js');
  bundle('./src/scripts/options.js', './app/scripts/', 'options.js');
});


gulp.task('default', ['js']);

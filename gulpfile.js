var gulp = require('gulp');
var del = require('del');
var livereload = require('gulp-livereload');
var notifier = require('node-notifier');
var zip = require('gulp-zip');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');


//Object.assign polyfill
if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}


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
gulp.task('build', [], function () {
  var manifest = require('./app/manifest'),
    distFileName = manifest.name + ' v' + manifest.version + '.zip';
  return gulp.src(['build/**'])
    .pipe(zip(distFileName))
    .pipe(gulp.dest('dist'));
});


function bundle(inputFile, outputDir, outputFile) {
  b = watchify(browserify(inputFile, options).transform(babelify.configure({
      plugins: ['object-assign']
    }))
  );
  b.on('update', function(){
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


gulp.task('js', function(){
  bundle('./src/scripts/background.js', './app/scripts/', 'background.js');
  bundle('./src/scripts/popup.js', './app/scripts/', 'popup.js');
  bundle('./src/scripts/content.js', './app/scripts/', 'content.js');
  bundle('./src/scripts/options.js', './app/scripts/', 'options.js');
});


gulp.task('default', ['js']);

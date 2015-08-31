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
  scripts: ['app/scripts/**/*.js', 'app/scripts/**/**/*.js']
};

//CSS

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(paths.scripts, ['scripts']);
});


//build


//clean build directory
gulp.task('clean', function (cb) {
  del([
    'build/*'
  ], cb);
});


//babelify for build, run livereload
/*gulp.task('scripts', [], function () {
  return gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(gulp.dest('build/scripts'))
    .pipe(livereload());
});*/

//compile sass styles
gulp.task('styles', function () {
// 	return gulp.src('app/styles/**/*.css')
// 		.pipe(minifycss({root: 'app/styles', keepSpecialComments: 0}))
// 		.pipe(gulp.dest('build/styles'));
  return gulp.src('app/styles/**')
    .pipe(gulp.dest('build/styles'));
});

//build distributable
gulp.task('build', [], function () {
  var manifest = require('./app/manifest'),
    distFileName = manifest.name + ' v' + manifest.version + '.zip';
  return gulp.src(['build/**'])
    .pipe(zip(distFileName))
    .pipe(gulp.dest('dist'));
});




//run all tasks after build directory has been cleaned
gulp.task('default', ['js']);


/*gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './entry.js',
    debug: true
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/js/'));
});*/

gulp.task('js', function(){
  bundle('./app/scripts/background.js', './build/scripts/', 'background.js');
  bundle('./app/scripts/popup.js', './build/scripts/', 'popup.js');
  bundle('./app/scripts/content.js', './build/scripts/', 'content.js');
  bundle('./app/scripts/options.js', './build/scripts/', 'options.js');
});



/*var b = watchify(browserify(Object.assign({}, watchify.args, {
  entries: ['./src/index.js'],
  debug: true
})));*/

 // on any dep update, runs the bundler
 // output build logs to terminal

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
    .pipe(gulp.dest(outputDir));
}


//extras


/*gulp.task('tag', function () {
 git.tag('v1.1.1', 'Version message', function (err) {
 if (err) throw err;
 });
 });

 // Run git commit
 // src are the files to commit (or ./*)
 gulp.task('commit', function () {
 return gulp.src('./git-test/*')
 .pipe(git.commit('initial commit'));
 });*/
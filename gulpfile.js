var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var replace = require('gulp-replace');
var jeditor = require("gulp-json-editor");
var zip = require('gulp-zip');


gulp.task('livereload', () => {
  livereload.listen();
})

//CONTENT SCRIPT

gulp.task('contentWatch', ['livereload'], function() {
  var bundler = browserify({
    entries: ['src/scripts/content.js'], // Only need initial file, browserify finds the deps
    transform: [babelify],
    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  });
  var watcher  = watchify(bundler);
  watcher
    .on('update', function () { // When any files update
      var updateStart = Date.now();
      console.log('Updating Content script...');
      watcher.bundle() // Create new bundle that uses the cache for high performance
        // .pipe(source('content.js'))
        .pipe(source('content_bundle.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe(livereload());
        console.log('Content script updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('content_bundle.js'))
    .pipe(gulp.dest('app/scripts'));
});

gulp.task('contentProd', function() {
  return browserify({
    entries: ['src/scripts/content.js'], // Only need initial file, browserify finds the deps
    transform: [babelify]
  })
  .bundle()
  .pipe(source('content_bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist/app/scripts'))
});

//BACKGROUND PAGE

gulp.task('backgroundWatch', ['livereload'], function() {
  var bundler = browserify({
    entries: ['src/scripts/background.js'], // Only need initial file, browserify finds the deps
    transform: [babelify],
    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  });
  var watcher  = watchify(bundler);
  watcher
    .on('update', function () { // When any files update
      var updateStart = Date.now();
      console.log('Updating Background page...');
      watcher.bundle() // Create new bundle that uses the cache for high performance
        // .pipe(source('background.js'))
        .pipe(source('background_bundle.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe(livereload());
      console.log('Background page updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('background_bundle.js'))
    .pipe(gulp.dest('app/scripts'));
});

gulp.task('backgroundProd', function() {
  return browserify({
    entries: ['src/scripts/background.js'], // Only need initial file, browserify finds the deps
    transform: [babelify]
  })
  .bundle()
  .pipe(source('background_bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist/app/scripts'))
});

//TODO: build BG and CS scripts for release

gulp.task('assets', () => {
  const locales = gulp.src('app/_locales/**')
    .pipe(gulp.dest('dist/app/_locales/'));

  const images = gulp.src('app/images/**')
    .pipe(gulp.dest('dist/app/images/'));

  const scripts = gulp.src(['app/scripts/ddp.js', 'app/scripts/q.js'])
    .pipe(gulp.dest('dist/app/scripts'))

  return merge(locales, images, scripts)
})

gulp.task('manifest', () => {
  return gulp.src('app/manifest.json')
    .pipe(jeditor( json => {
      return Object.assign({}, json, {
        "background": {
          "scripts": [ "scripts/background_bundle.js" ]
        },
        "content_security_policy": "script-src 'self'; object-src 'self'"
      })
    }))
    .pipe(gulp.dest('dist/app/'));
})

//RELEASING


gulp.task('inject-prod-scripts', ['contentProd', 'backgroundProd'], function(){
  var popup = gulp.src('app/popup.html')
    .pipe(replace('http://localhost:3000/scripts/popup_bundle.js', 'scripts/popup_bundle.js'))
    .pipe(gulp.dest('dist/app'));
  var options = gulp.src('app/options.html')
    .pipe(replace('http://localhost:3000/scripts/options_bundle.js', 'scripts/options_bundle.js'))
    .pipe(gulp.dest('dist/app'));
  return merge(popup, options);
});


gulp.task('release', ['inject-prod-scripts', 'assets', 'manifest'], function (){
  var manifest = require('./app/manifest.json'),
    distFileName = manifest.name + ' v' + manifest.version + '.zip';
  return gulp.src('dist/app/**')
    .pipe(zip(distFileName))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['contentWatch', 'backgroundWatch']);

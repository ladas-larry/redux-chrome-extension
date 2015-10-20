var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var replace = require('gulp-replace');
var jeditor = require("gulp-json-editor");

livereload.listen();


//CONTENT SCRIPT

gulp.task('contentWatch', function() {
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
        .pipe(source('content.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe(livereload());
        console.log('Content script updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('content_bundle.js'))
    .pipe(gulp.dest('app/scripts'));
});

gulp.task('contentProd', function() {
  gulp.src('src/scripts/content.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist/app'))
});

//BACKGROUND PAGE

gulp.task('backgroundWatch', function() {
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
        .pipe(source('background.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe(livereload());
      console.log('Background page updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('background_bundle.js'))
    .pipe(gulp.dest('app/scripts'));
});

gulp.task('backgroundProd', function() {
  gulp.src('src/scripts/background.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(source('background_bundle.js'))
    .pipe(gulp.dest('dist/app'))
});

//TODO: build BG and CS scripts for release


gulp.src('app/_locales/**')
  .pipe(gulp.dest('dist/app/_locales/'));

gulp.src('app/images/**')
  .pipe(gulp.dest('dist/app/images/'));

gulp.src('app/manifest.json')
  .pipe(jeditor({
    'content_security_policy': "script-src 'self'; object-src 'self'"
  }))
  .pipe(gulp.dest('dist/app/'));

//RELEASING


gulp.task('inject-prod-scripts', function(){
  var popup = gulp.src('app/popup.html')
    .pipe(replace('http://localhost:3000/scripts/popup_bundle.js', 'scripts/popup_bundle.js'))
    .pipe(gulp.dest('dist/app'));
  var options = gulp.src('app/options.html')
    .pipe(replace('http://localhost:3000/scripts/options_bundle.js', 'scripts/options_bundle.js'))
    .pipe(gulp.dest('dist/app'));
  return merge(popup, options).once('end', function () {
    process.exit();
  });
});


gulp.task('release', ['inject-prod-scripts'], function (){
  var manifest = require('app/manifest'),
    distFileName = manifest.name + ' v' + manifest.version + '.zip';
  return gulp.src('dist/app/**')
    .pipe(zip(distFileName))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['contentWatch', 'backgroundWatch']);
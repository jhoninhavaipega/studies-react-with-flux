var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulpify = require('gulpify');
var sassify = require('sassify');
var watchify = require('watchify');
var rename = require('gulp-rename');
var gulp = require('gulp');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var merge = require('utils-merge');
var path = require('path');

function bundle(bundleStream) {
  bundleStream
    .bundle()
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('list-notifications.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(notify({
      title: 'Watch Scripts',
      message: 'Success!',
      sound: true,
      icon: path.join(__dirname, 'icon-notify.png')
    }));
};

gulp.task('browserify', function() {
  var args = merge(watchify.args, {
    debug: false,
    transform: ['reactify'],
    ignore: ['node_modules']
  });

  var bundleStream = browserify('src/js/app.js', args)
    .transform(sassify, {
      'auto-inject': true,
      base64Encode: false,
      sourceMap: false
    })
    .plugin(watchify, {
      ignoreWatch: ['**/node_modules/**', '**/bower_components/**']
    });

  bundle(bundleStream);

  bundleStream.on('update', function() {
    bundle(bundleStream);
  });
});

gulp.task('shell', shell.task([
  'cp ./dist/js/list-notifications.js /app/walmart-frontend/new-assets/static/src/js/components/',
  'cd /app/walmart-frontend/new-assets/ && grunt buildDev'
]));

gulp.task('default', ['browserify', 'shell']);
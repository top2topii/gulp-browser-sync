var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');
var replace = require('gulp-token-replace');

require('gulp-semver-tasks')(gulp, {versionSource: ['./package.json']});


var reload = browserSync.reload;
var exec = require('child_process').exec;

// Uglify javascript
// gulp.task('scripts', function() {
//   gulp.src('js/*.js')
//     .pipe(plumber())
//     .pipe(uglify())
//     .pipe(gulp.dest('build/js'))
// });

//Run Flask server
gulp.task('runserver', function() {
    var proc = exec('python app.py');
});

// Default task: Watch Files For Changes & Reload browser
gulp.task('default', ['runserver'], function () {
  browserSync({
    notify: false,
    proxy: "127.0.0.1:5003"
  });
 
  gulp.watch(['templates/*.*', 'static/js/*.js', 'static/*.css'], reload);

});

gulp.task('token-replace', function() {
    var config = require('./config.json');
    console.log(config)
    return gulp.src(['templates*/*.html'])
        .pipe(replace({global:config, preserveUnknownTokens:true}))
        .pipe(gulp.dest('dist'))
});

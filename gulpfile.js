var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var prettify = require('gulp-prettify');


gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('less', function () {
  return gulp.src('./css/blocks/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('common.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
  gulp.watch("./**/*.less", function(event){
    gulp.run('less');
  });
  gulp.watch("./tmp/*.jade", function(event){
    gulp.run('jade');
  });
});
 
gulp.task('prettify', function() {
  gulp.src('*.html')
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('./'))
});

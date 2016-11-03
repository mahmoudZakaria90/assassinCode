var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var notificator = require('gulp-jshint-notify-reporter');
var csso = require('gulp-csso');

//sass
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});


//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/en/*.sass',['sass'])
	gulp.watch('./public/**/*.html',['html'])
	gulp.watch('./src/js/script.js',['browserify'])
    gulp.watch('./src/js/**.js',['lint'])
})


//html
gulp.task('html', function() {
	gulp.src('./public/**/*.html')
		.pipe(connect.reload());

})

//js
gulp.task('browserify', function() {
    return browserify('./src/js/script.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('script.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
});

//css minify
gulp.task('csso', function () {
    return gulp.src('./public/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./public/css/'));
});

//js lint
gulp.task('lint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(notificator())
});

//connect 
gulp.task('server',function(){
	connect.server({
		root: 'public',
		livereload: true
	})
})

//default
gulp.task('default',['watch','server','browserify','csso'])
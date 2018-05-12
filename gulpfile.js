var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browsersync = require('browser-sync');

gulp.task('sass',function() {
	return gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		
});


gulp.task('watch',['sass'],function(){
	gulp.watch('app/sass/main.sass',['sass']);
	
});
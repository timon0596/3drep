var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browsersync = require('browser-sync');

gulp.task('sass',function() {
	return gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browsersync.reload({stream: true}))
});

gulp.task('browser-sync',function(){
	browsersync({
		server: {
			baseDir: 'app'
		},
		notyfy: false
	});
});
gulp.task('watch',['browser-sync','sass'],function(){
	gulp.watch('app/sass/main.sass',['sass']);
	gulp.watch('app/*.html', browsersync.reload);
	gulp.watch('app/js/**/*.js', browsersync.reload);
});
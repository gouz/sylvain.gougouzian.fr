var onError = function(err) {
		notify.onError({
			title:    "Gulp",
			subtitle: "Failure!",
			message:  "Error: <%= error.message %>"
		})(err);
		this.emit('end');
	},
	gulp         = require('gulp'),
	addsrc       = require('gulp-add-src'),
	clean        = require('gulp-clean'),
	coffee       = require('gulp-coffee'),
	concat       = require('gulp-concat'),
	csso         = require('gulp-csso'),
	declare      = require('gulp-declare'),
	handlebars   = require('gulp-handlebars'),
	imagemin     = require('gulp-imagemin'),
	jade         = require('gulp-jade'),
	minifyHTML   = require('gulp-minify-html'),
	pleeease     = require('gulp-pleeease'),
	notify       = require('gulp-notify'),
	plumber      = require('gulp-plumber'),
	rename       = require('gulp-rename'),
	sass         = require('gulp-sass'),
	wrap         = require('gulp-wrap'),
	uglify       = require('gulp-uglify'),
	runSequence  = require('run-sequence')
;

gulp.task('styles', function() {
	return gulp.src(['src/sass/*.scss'])
		.pipe(plumber({errorHandler: onError}))
		.pipe(sass())
		.pipe(addsrc.prepend('bower_components/bootstrap/dist/css/bootstrap.css'))
    .pipe(addsrc.prepend('bower_components/font-awesome/css/font-awesome.css'))
		.pipe(pleeease({browsers: ["last 3 versions"]}))
		.pipe(csso())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('app/assets/css'));
});

gulp.task('scripts', function() {
	return gulp.src(['src/coffee/*.coffee'])
		.pipe(plumber({errorHandler: onError}))
		.pipe(concat('app.coffee'))
		.pipe(coffee())
		.pipe(addsrc.prepend(['app/assets/hbs/*.js']))
		.pipe(addsrc.prepend('bower_components/handlebars/handlebars.runtime.js'))
		.pipe(addsrc.prepend('src/vendor/lifetime.js'))
		.pipe(addsrc.prepend('src/vendor/classie.js'))
		.pipe(addsrc.prepend('src/vendor/cbpAnimatedHeader.js'))
		.pipe(addsrc.prepend('bower_components/bootstrap/dist/js/bootstrap.js'))
    .pipe(addsrc.prepend('bower_components/jquery/dist/jquery.js'))
		.pipe(concat('app.js'))
//		.pipe(uglify())
		.pipe(gulp.dest('app/assets/js'));
});

gulp.task('templates-html', function() {
	return gulp.src(['src/jade/*.jade'])
		.pipe(plumber({errorHandler: onError}))
		.pipe(jade())
		.pipe(minifyHTML({ quotes: true }))
		.pipe(gulp.dest('app'));
});

gulp.task('templates-hbs', function() {
	return gulp.src(['src/hbs/**.hbs'])
		.pipe(plumber({errorHandler: onError}))
		.pipe(minifyHTML({ quotes: true }))
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'cv.templates',
      noRedeclare: true
    }))
		.pipe(gulp.dest('app/assets/hbs'));
});


gulp.task('fonts', function() {
	return gulp.src(['bower_components/font-awesome/fonts/*', 'bower_components/bootstrap/fonts/*'])
		.pipe(gulp.dest('app/assets/fonts'));
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
				optimizationLevel: 7,
				interlaced: true
    }))
    .pipe(gulp.dest('app/assets/img'));
});

gulp.task('clean', function() {
	return gulp.src('app', {read: false})
		.pipe(clean({force: true}));
});

gulp.task('default', function() {

	runSequence(
		['clean'],
		['templates-html', 'styles', 'fonts', 'images'],
		'templates-hbs',
		'scripts'
	);

	gulp.watch('src/**/*.scss', function() {
		gulp.start('styles');
	});
	gulp.watch('src/**/*.coffee', function() {
		gulp.start('scripts');
	});
	gulp.watch('src/**/*.jade', function() {
		gulp.start('templates-html');
	});
});

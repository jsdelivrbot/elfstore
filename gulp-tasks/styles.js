'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const config = require('../config');

//styl
gulp.task('styles', () => {
	return gulp.src([
		`${config.path.shared}/**/*.styl`,
		`${config.path.components}/**/*.styl`])
		.pipe(concat('bundle.styl'))
		.pipe(stylus({
			use: [nib()],
			compress: false
		}))
		.pipe(gulp.dest(config.path.dist));
});

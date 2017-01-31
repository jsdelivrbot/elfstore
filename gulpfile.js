'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const rev = require('gulp-rev-append');
const spritesmith = require('gulp.spritesmith');
const tinypng = require('gulp-tinypng');
const clc = require('cli-color');
const config = require('./config');
const path = {
	root: config.root,
	shared: config.root + '/shared/',
	components: config.root + '/components/',
	images: config.root + '/images/',
	dist: config.root + '/dist/'
};

//connect
gulp.task('connect', () => {
	connect.server({
		root: config.root,
		port: config.port,
		livereload: true
	});
});

//js
gulp.task('js', () => {
	return gulp.src([path.components + '**/*.js'])
		.pipe(connect.reload());
});

//html
gulp.task('html', () => {
	return gulp.src([path.root + '/**/*.html'])
		.pipe(connect.reload());
});

//styl
gulp.task('styl', () => {
	return gulp.src([
		path.shared + '**/*.styl',
		path.components + '**/*.styl'])
		.pipe(concat('bundle.styl'))
		.pipe(stylus({
			use: [nib()],
			compress: false
		}))
		.pipe(gulp.dest(path.dist))
		.pipe(connect.reload());
});

//sprite
gulp.task('sprite', () => {
	return gulp.src([path.images + 'icons/source/**/*.*'])
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css'
		}))
		.pipe(gulp.dest(path.images + 'icons/sprite/'));
});

//hash
gulp.task('hash', () => {
	return gulp.src([path.root + '**/*.html'])
		.pipe(rev())
		.pipe(gulp.dest(file => file.base ));
});

//img-compress
gulp.task('img-compress', () => {
	return gulp.src([path.images + '**/*.{jpg,jpeg,png}'])
		.pipe(tinypng(config.tinyPngApiKey))
		.pipe(gulp.dest(file => file.base ));
});

//watch
gulp.task('watch', function () {
	gulp.watch([
		path.root + '/**/*.html'], ['html']);
	gulp.watch([
		path.shared + '**/*.styl',
		path.components + '**/*.styl'], ['styl']);
	gulp.watch([
		path.components + '**/*.js'], ['js']);
	gulp.watch([
		path.images + 'icons/source/**/*.*'], ['sprite']);
});

gulp.task('default', [
	'connect',
	'styl',
	'sprite',
	'hash',
	'watch'
]);
"use strict"

var gulp = require('gulp');

var nodemon = require('gulp-nodemon')
var jshint = require('gulp-jshint')

var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var lint = require('gulp-eslint');
var concat = require('gulp-concat');
var open = require('gulp-open');
var exec = require('child_process').exec;

var config = {
    port: 3000,
    devBaseUrl: 'http://react',
    paths: {
        html: './src/*.html',
        mainJs: './src/main.js',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/js/bootstrap.js'
        ],
        dist: './dist'
    }
}

//Start server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        host: config.devBaseUrl,
        livereload: true,
    });
});

//Open browser
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({app: 'firefox', uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs, {debug: true})
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('eslint', function() {
    gulp.src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'eslint']);
});

gulp.task('lint', function () {
    gulp.src('./server/**/*.js')
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('server', ['lint'], function () {
    nodemon({
        script: './server/server.js',
        tasks: ['lint'],
    })
    .on('restart', function() {});
});


gulp.task('default', ['server', 'html', 'js', 'css', 'eslint', 'open', 'watch']);
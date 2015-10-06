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
    app: {
        url: 'http://localhost',
        port: 3000,
        main: './app/main.js',
        html: './app/*.html',
        js: './app/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/js/bootstrap.js'
        ],
        dist: './dist'
    },
    server: {
        main: './server/server.js',
        js: './server/**/*.js',
        mongoBin: 'c:/mongo/bin/',
        mongoDB: 'c:/mongo/db/',
    }
};

var runCommand = function(command) {
    exec(command, function (err, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
            gulp.start('mongoDBStop');
        }
    });
}

gulp.task('lint', function () {
    gulp.src('./server/**/*.js')
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('server', ['mongoDB'], function () {
    nodemon({
        script: config.server.main,
        tasks: ['lint'],
    })
    .on('restart', function() {});
});

gulp.task('mongoDB', function() {
    var command = config.server.mongoBin +
        "mongod --dbpath " + config.server.mongoDB +
        " --logpath " + config.server.mongoDB + "mongo.log";
    runCommand(command);
});

gulp.task('mongoDBStop', function() {
    var command = config.server.mongoBin + 'mongo --eval db.shutdownServer()'
    runCommand(command);
});


gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        host: config.url,
        livereload: true,
    });
});

//Open browser
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({app: 'firefox', uri: config.app.url + ':' + config.app.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.app.html)
        .pipe(gulp.dest(config.app.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.app.main, {debug: true})
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.app.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.app.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.app.dist + '/css'));
});

gulp.task('eslint', function() {
    gulp.src(config.app.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
    gulp.watch(config.app.html, ['html']);
    gulp.watch(config.app.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css',  'open', 'watch', 'server']);
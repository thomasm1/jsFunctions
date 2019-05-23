var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var sour = require('vinyl-source-stream');
var watchify = require("watchify");
var gutil = require("gulp-util");
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};
var  watchedBrowserify = watchify(browserify 
    ({
        basedir: '.',
        debug: true, 
        entries: ['src/main.ts'],
        cache: {},
        pacakageCache: {}
    }).plugin(tsify));
   
gulp.task("copy-html", function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("proj", function() {
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(sour('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html", "proj"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);

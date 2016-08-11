var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var appDevPath = "./dev";
var appProdPath = "./app";

gulp.task('build-ts', function() {
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest(appProdPath));
});

gulp.task('watch', ['build-ts'], function() {
    gulp.watch('./**/*.ts', ['build-ts']);
});
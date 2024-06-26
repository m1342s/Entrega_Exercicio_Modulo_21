const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin=require('gulp-imagemin')
const uglify=require('gulp-uglify')


function styles() {
    return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function minificaImagens() {
    return gulp
    .src('./src/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function uglifyJS(){
    return gulp
    .src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default=gulp.parallel(styles,minificaImagens,uglifyJS)
exports.watch=function() {
    gulp.watch("./src/styles/*.scss",gulp.parallel(styles))
}
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    csso = require('gulp-csso'),
    imagemin = require('gulp-imagemin');

// style
gulp.task('style', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
        }))
        .pipe(gulp.dest('app/css'));
    });

 //watch  
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['style']);
    });

//Clean
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

//images
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin({
        progressive: true
      }))
    .pipe(gulp.dest('dist/images'))
  });

  //fonts
  gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  });

  //build
gulp.task('build', ['clean', 'images', 'fonts'], function () {
    return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify().on('error', function(e){
        console.log(e) })))
    .pipe(gulpif('*.css', csso()))
    .pipe(gulp.dest('dist'))
});


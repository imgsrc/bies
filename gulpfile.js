/**
 * Created by esx on 10.11.2016.
 */
var gulp = require('gulp');
// var scss = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var scss = require('gulp-sass');

var path = {
    src: { //Укажем откуда брать исходники
        html: 'app/*.html',
        scss: 'app/scss/**/*.scss',
        css: 'app/css/**/*.css',
        img: 'app/img/**/*.*'
    },
    watch: { //Укажем, за изменением каких файлов мы хотим наблюдать
        html: 'app/*.html',
        scss: 'app/scss/**/*.scss',
        css: 'app/css/media.css',
        js: 'src/js/**/*.js'
    }
};

gulp.task('scss', function () {
    return gulp.src(path.src.scss)
        .pipe(scss())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) // Создаем префиксы
        .pipe(gulp.dest('app/css'))
        .on('error', scss.logError)
        .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении;
});

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        proxy: "bies",
        notify: true // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function () { // Создаем таск watch
    gulp.watch(path.watch.scss, ['scss']); // Наблюдение за scss файлами в папке scss
    gulp.watch(path.watch.html, browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(path.watch.css, browserSync.reload); // Наблюдение за media.css
    gulp.watch(path.watch.js, browserSync.reload);   // Наблюдение за JS файлами в папке js
});

// Default Task
gulp.task('default', ['watch']);
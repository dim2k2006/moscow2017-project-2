import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import uglify       from 'gulp-uglify';
import sourcemaps   from 'gulp-sourcemaps';
import concat       from 'gulp-concat';
import errorHandler from '../utils/errorHandler';
import settings     from '../settings';

gulp.task('library', () => {
    return gulp.src(settings.src.scripts + '/library/*.js')
        .pipe(plumber({errorHandler: errorHandler}))
        .pipe(sourcemaps.init())
        .pipe(concat('library.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.dist.scripts));
});

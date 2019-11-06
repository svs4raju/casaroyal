var gulp = require("gulp");
var sass = require("gulp-sass");
var browsersync = require("browser-sync").create();
// var minify = require("gulp-clean-css");
var autoPrefixer = require("gulp-autoprefixer");

function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(
      autoPrefixer({
        cascade: false
      })
    )
    // .pipe(minify({ compactability: "ie8" }))
    .pipe(gulp.dest("./styles/"))
    .pipe(browsersync.stream());
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browsersync.reload);
}

exports.default = gulp.series(style, watch);

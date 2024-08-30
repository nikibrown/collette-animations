const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function style() {
	return gulp.src("./assets/css/*.scss").pipe(sass()).on("error", sass.logError).pipe(gulp.dest("./assets/css"));
}

exports.default = function () {
	gulp.watch("./assets/scss/**/*").on("change", series(style));
};

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	uglify = require("gulp-uglify"),
	browserify = require("gulp-browserify"),
	concat = require("gulp-concat"),
	concatcss = require("gulp-concat-css"),
	minifycss = require("gulp-minify-css"),
	minifyhtml = require("gulp-minify-html"),
	compass = require("gulp-compass"),
	connect = require("gulp-connect");
	
var jsSources = [
	"components/scripts/main.js",
	"components/scripts/person.js"
];

var cssSources = [
	"builds/development/css/normalize.css",
	"builds/development/css/main.css"
];

var htmlSources = [
	"builds/development/index.html"
];

var sassSources = [
	"components/sass/style.scss"
];


gulp.task("js", function(){
	gulp.src(jsSources)

		.pipe(browserify())
		.pipe(concat("script.js"))
		.pipe(gulp.dest("builds/development/js"))

		.pipe(uglify())
		.pipe(gulp.dest("builds/production/js"))
		.pipe(connect.reload())
});


/*gulp.task("css", function(){
	gulp.src(cssSources)

		.pipe(concat("style.css"))

		.pipe(minifycss())
		.pipe(gulp.dest("builds/production/css"))

});*/


gulp.task("html", function(){
	gulp.src(htmlSources)

		.pipe(minifyhtml())
		.pipe(gulp.dest("builds/production"))
		.pipe(connect.reload())

});


gulp.task("sass", function(){

	gutil.log("sass development...");

	gulp.src(sassSources)
		.pipe(compass({
			sass: "components/sass",
			image: "builds/development/img",
			style: "expanded"
		}))
		.on("error", gutil.log)
		.pipe(gulp.dest("builds/development/css"))

	gutil.log("sass production...");

	gulp.src(sassSources)
		.pipe(compass({
			sass: "components/sass",
			image: "builds/production/img",
			style: "compressed"
		}))
		.on("error", gutil.log)

		//compessing with compass failes so for now...
		.pipe(minifycss())

		.pipe(gulp.dest("builds/production/css"))
		.pipe(connect.reload())

});



gulp.task("watch", function(){
	gulp.watch(jsSources, ["js"]);
	gulp.watch("components/sass/*.scss", ["sass"]);
	gulp.watch(htmlSources, ["html"]);
});



gulp.task("connect", function(){
	connect.server({
		root: "builds/development/",
		livereload: true
	});

});


gulp.task("default", ["js", "sass", "html", "connect", "watch"])

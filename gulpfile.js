const gulp = require("gulp");
const gts = require("gulp-typescript");
const gsm = require("gulp-sourcemaps");
const gjedt = require("gulp-json-editor");
const ws = require("webpack-stream");
const merge = require("merge2");
const clean = require("gulp-clean");
const webpack = require("webpack");
const path = require("path");

// Top level tasks:
gulp.task("default", ["build"]);
gulp.task("build", ["build-src", "build-min", "build-test"]);
gulp.task("dist", ["build-src", "build-min"], task_dist);
gulp.task("clean", task_clean);

// Supportive tasks:
gulp.task("build-src", task_build_src);
gulp.task("build-min", ["build-src"], task_build_min);
gulp.task("build-test", task_build_test);

function task_build_src() {
    return call_webpack("./src/webpack.config.js");
}

function task_build_min() {
    return call_webpack("./src/webpack.config.js", true);
}

function task_build_test() {
    return call_tsc("./test/tsconfig.json");
}

function task_dist() {
    return merge([
        copy_dist_files(),
        copy_package_json()
    ]);
}

function task_clean() {
    return gulp.src(["./out"]).pipe(clean());
}

function call_tsc(cfg_path) {
    const proj = gts.createProject(cfg_path);
    const compiled = proj.src().pipe(gsm.init()).pipe(proj());
    return merge([
        compiled.dts.pipe(gulp.dest(proj.options.outDir)),
        compiled.js.pipe(gsm.write()).pipe(gulp.dest(proj.options.outDir))
    ]);
}

function call_webpack(cfg_path, minified) {
    let cfg = require(cfg_path);

    if (minified) {
        cfg.plugins = [
            new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
        ];
        let fn = path.parse(cfg.output.filename);
        fn.ext = ".min.js";
        delete fn.base;
        cfg.output.filename = path.format(fn);
    }

    return gulp.src(cfg.entry).pipe(ws(cfg, webpack)).pipe(gulp.dest("./out/built"));
}

function copy_dist_files() {
    return gulp.src([
        "./LICENSE",
        "./README.md",
        "./def/is-pe.d.ts",
        "./out/built/*",
    ]).pipe(gulp.dest("./out/dist"));
}

function copy_package_json() {
    return gulp.src("./package.json")
        .pipe(gjedt((json) => {
            delete json.scripts;
            delete json.jest;
            delete json.devDependencies;
            return json;
        }))
        .pipe(gulp.dest("./out/dist"));
}
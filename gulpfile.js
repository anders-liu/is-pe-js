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
gulp.task("build", ["build-src", "build-test"]);
gulp.task("dist", ["build-src", "dist-files"]);
gulp.task("clean", task_clean);

// Supportive tasks:
gulp.task("build-src", task_build_src);
gulp.task("build-test", task_build_test);
gulp.task("dist-files", ["build-src"], task_dist_files);

function task_build_src() {
    return call_webpack("./src/webpack.config.js");
}

function task_build_test() {
    return call_tsc("./test/tsconfig.json");
}

function task_dist_files() {
    return merge([
        copy_nodejs_files(),
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

function call_webpack(cfg_path) {
    const cfg = require(cfg_path);
    return gulp.src(cfg.entry).pipe(ws(cfg, webpack)).pipe(gulp.dest(cfg.output.path));
}

function copy(src, dest) {
    return gulp.src(src).pipe(gulp.dest(dest));
}

function copy_nodejs_files() {
    return copy([
        "./LICENSE",
        "./README.md",
        "./def/is-pe.d.ts",
        "./out/webpack/is-pe.js",
    ], "./out/dist/nodejs");
}

function copy_package_json() {
    return gulp.src("./package.json")
        .pipe(gjedt((json) => {
            delete json.scripts;
            delete json.jest;
            delete json.devDependencies;
            return json;
        }))
        .pipe(gulp.dest("./out/dist/nodejs"));
}
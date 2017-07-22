const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "index.ts"),
    target: "web",
    output: {
        path: path.resolve(__dirname, "../out/webpack"),
        filename: "is-pe.js",
        libraryTarget: "umd",
        library: "is-pe"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.js$/, use: "source-map-loader", enforce: "pre" }
        ]
    }
};
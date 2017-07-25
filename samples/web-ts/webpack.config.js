const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "index.ts"),
    target: "web",
    output: {
        filename: "index.js",
        libraryTarget: "umd"
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
    },
    externals: {
        "is-pe": "is-pe"
    }
};
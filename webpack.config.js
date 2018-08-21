const path = require("path");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/scripts")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/scripts/"
    }
};

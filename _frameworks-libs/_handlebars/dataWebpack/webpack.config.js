const path = require("path");

module.exports = {
    entry: ["./js/calculateNetGain.js","./js/main.js"],
    output: {
        path: "./js",
        filename: "main-bundled.js"
    }, 
    resolve: {
        fallback: path.join(__dirname, "helpers")
    },
    module: {
        loaders: [
            // {test: /\.hbs$/, loader: "handlebars-loader"}
             { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    }
};
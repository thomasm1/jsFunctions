module.exports = {
  resolve: {
      extensions: ["", ".ts", ".tsx", ".js"],
      modulesDirectories: [
          "./Client/script/",
          "./node_modules"
       ]
   },
   entry: entries, 
   output: {
      path: assets, 
      filename: "[name].js"
   },
   devtool: "source-map",
   module: {
       loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
       ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            contex: ".",
            manifest: require("./wwwroot/assets/vendor-manifest.json")
         }),
    ]
 };
 
 

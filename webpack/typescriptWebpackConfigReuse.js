const entries = {};
let files = [];
files = files.concat(glob.sync("./Features/**/*.specs.ts*"));
files = files.concat(glob.sync("./Client/script/**/*.specs.ts*"));

files.forEach(file => {
    var name = file.match("\.\/(?:Features|CLient\/script)(.+\/[^\/]+)\.tsx?")[1];
    entries[name] = file;
 });
 
 modules.exports = {
    resolve: ..,
    entry: entries,
    output: {
        path: assets,
        filename: "[name].js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: \/.tsx?$/, loader: 'ts-loader' }
         ]
    },
    plugins: ...
 };

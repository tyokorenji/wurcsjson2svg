var path = require("path");
var webpack = require("webpack");
// var fileName = "main.js";
var fileName = "./main.js";
var src = path.resolve(__dirname, "js");
var dist = path.resolve(__dirname, "dist");

module.exports = {
    mode: 'development',
    entry: {
        // app: path.join(src, fileName)
        app: fileName
        // app: "./src/js/app.js"
    },
    target : 'node',
    output: {
        path: dist,
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                use: [
                    {
                        // Babel を利用する
                        loader: 'babel-loader',
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2018 を ES5 に変換
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
            ]

                // loaders: [
        //     {
        //         //BabelでJSコードをES2015+ -> ES5変換
        //         test: /\.js$/,
        //         exclude: /node_module | bower_components/,
        //         loader: "babel-loader"
        //     }
        // ]


    }

};

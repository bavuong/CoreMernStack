//webpack.config.js
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
    entry: APP_DIR+'/index.jsx',
    output: {
        //path: BUILD_DIR,
        filename: 'bundle.js'

    },
    watch: true,
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {  "presets": ["es2015", "react", "stage-3"] }
        }],
    },
    devServer:{
        port :3000
    }
};
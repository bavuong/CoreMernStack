//webpack.config.js
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        APP_DIR+'/index.jsx',
        // 'script!semantic-ui-css/semantic.min.js',
        // 'script!semantic-ui-react/dist/semantic-ui-react.min.js',
        // './app/app.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    watch: true,
    module: {
        loaders: [{
            test:/\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {  "presets": ["es2015", "react", "stage-3"] }
        }],
    },
    devServer:{
        port :3000,
        historyApiFallback: true,// call route with client
    }
};
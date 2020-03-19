const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

module.exports = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.bundle.js',
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                // include: APP_DIR,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
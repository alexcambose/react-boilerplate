const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: { 
        index: './src/index.js',
        vendor: ["react", "react-dom","react-router","react-router-dom", "redux", "react-redux"],
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    optimization: {
        minimize: false,
        runtimeChunk: {
            name: 'vendor'
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: "vendor",
                    chunks: "initial",
                    minSize: 1
                }
            }
        }
    }
};
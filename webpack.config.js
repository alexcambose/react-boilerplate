const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 8080;
const inDev = process.env.NODE_ENV !== 'production';
console.log(inDev);
module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ["react", "react-dom", "react-router", "react-router-dom", "redux", "react-redux", "material-ui"],
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: inDev ? '[name].bundle.js' : '[hash].bundle.js',
    },
    mode: 'development',
    devtool: (inDev ? 'cheap-source-map' : ''),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[hash].[ext]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Bolierplate'
        }),
    ],
    optimization: {
        minimize: true,
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
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    performance: {
        hints: "error"
    }
};
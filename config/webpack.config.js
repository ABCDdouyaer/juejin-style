/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 16:37:36
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 11:17:16
 * @Description: 
 */
const path = require('path');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        alias: {// ts短路径必须引入插件TsconfigPathsPlugin 还需要tsconfig.json增加对应的路径 和baseUrl
            '@root': path.resolve(__dirname, '../'),
            '@page': path.resolve(__dirname, '../src/page'),
            '@component': path.resolve(__dirname, '../src/components'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.(sc|sa|c)ss$/,
                // exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     injectType: 'singletonStyleTag'
                        // }
                    },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true
                        // }
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new DllReferencePlugin({
            manifest: require('../dist/common.manifest.json'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: `index.html`,
            chunks: ['index'],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 9090,
        host: '10.205.96.151',
        hot: true,
        open: true,
        watchOptions: {
            aggregateTimeout: 1000,
            poll: 1000,
            ignored: /node_modules/,
        },
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                pathRewrite: {"^/api": ""}
            }
        }
    },
};

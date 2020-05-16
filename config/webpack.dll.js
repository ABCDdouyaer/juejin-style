/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 16:37:42
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-13 16:46:45
 * @Description: 
 */
const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
    mode: 'development',
    entry: {
        common: ['react', 'react-dom'],
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dist'),
        library: '[name]_dll', // 全局定义的变量
    },
    plugins: [
        new DllPlugin({
            name: '[name]_dll', // json文件用于引用的变量名 同library对应
            path: path.resolve(__dirname, '../dist', '[name].manifest.json'), // 生成的动态链接库文件输出地址
        }),
    ],
};

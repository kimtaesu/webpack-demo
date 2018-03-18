const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
        }),

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // CommonsChunkPlugin이 웹팩4에서 optimize 속성의 splitChunks로 이전되었습니다.
    // 아래의 예시는 react의 경우에 대부분의 청크가 공통적으로 사용하는 모듈들을 vendor라는 entry 이름으로 추출하는 겁니다.
    optimization: {
        splitChunks: {
            name: 'vendor'
        }
    }
};

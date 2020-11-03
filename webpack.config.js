const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')
const { title } = require('process');
const { Template } = require('webpack');

module.exports = {
  ...base,
  devtool: "inline-source-map",
  devServer:{
      contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,//正则表达式，如果文件以.CSS结尾就使用下面的use
        use: ['style-loader', 'css-loader'],//'css-loader'将css文件读到JS文件里，'style-loader'将css-loader读到的内容变成标签放到head里面
      },
    ],
  },
};


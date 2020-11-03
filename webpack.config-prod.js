const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { title } = require('process');
const { Template } = require('webpack');
const base = require('./webpack.config.base.js')
module.exports = {
  ...base,
  mode: 'production',// 切换模式可选production（默认）/ development   正在开发中用development ,要发布就使用production
  //提取css文件
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
    ignoreOrder: false,
  }),
],
  //添加css文件
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,//正则表达式，如果文件以.CSS结尾就使用下面的use
        //将css抽成文件
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
          ],
        
      },
    ],
  },
};


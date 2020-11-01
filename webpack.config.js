var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const { title } = require('process');
const { Template } = require('webpack');

module.exports = {
  mode: 'production',// 切换模式可选production（默认）/ development   正在开发中用development ,要发布就使用production
  entry: './src/index.js',//进入哪个文件转译
  output: {
    //path: path.resolve(__dirname, 'dist'),//默认dist
    //filename: 'index.js',//出现在dist里被转义后的文件名
    filename: '[name].[contenthash].js',//每次重新运行会更行dist文件
  },
  //添加html文件
  plugins: [new HtmlWebpackPlugin({
      title: '渣渣',
      template: 'src/assets/index.html'
  })],
  //添加css文件
  module: {
    rules: [
      {
        test: /\.css$/i,//正则表达式，如果文件以.CSS结尾就使用下面的use
        use: ['style-loader', 'css-loader'],//'css-loader'将css文件读到JS文件里，'style-loader'将css-loader读到的内容变成标签放到head里面
      },
    ],
  },
};


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',//进入哪个文件转译
  output: {
    filename: '[name].[contenthash].js',//每次重新运行会更行dist文件
  },
  //添加html文件
  plugins: [new HtmlWebpackPlugin({
      title: '渣渣',
      template: 'src/assets/index.html'
  }),
],
};


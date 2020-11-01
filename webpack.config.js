var path = require('path');

module.exports = {
  mode: 'production',// 切换模式可选production（默认）/ development   正在开发中用development ,要发布就使用production
  entry: './src/index.js',//进入哪个文件转译
  output: {
    //path: path.resolve(__dirname, 'dist'),//默认dist
    //filename: 'index.js',//出现在dist里被转义后的文件名
    filename: '[name].[contenthash].js',//每次重新运行会更行dist文件
  }
};
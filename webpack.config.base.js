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
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.styl$/,
      use: ['style-loader','css-loader','stylus-loader']
    },
    {
      test: /\.less$/,
      use: ['style-loader','css-loader','less-loader'], 
    },
    {
      test: /\.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader:"sass-loader",
          options:{
            implementation: require('dart-sass')
          }
        },
      ],
    },
  ],
},
};


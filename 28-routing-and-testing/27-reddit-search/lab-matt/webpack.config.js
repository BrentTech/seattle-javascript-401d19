'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HTMLPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle-[hash].js`,
    path: `${__dirname}/build`,
  },
  plugins: [htmlWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
'use strict';

// vinicio - this line is NodeJS

//---------------------------------------------------------------------
// PRODUCTION SETTINGS
//---------------------------------------------------------------------
require('dotenv').config();
// vinicio - this line is setting up webpack to interface with dotenv
const {DefinePlugin,EnvironmentPlugin} = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
//---------------------------------------------------------------------

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webPackConfig = module.exports = {};

const PRODUCTION = process.env.NODE_ENV === 'production'; // vinicio - true or false

//------------------------------------------------------------
webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  filename : 'bundle.[hash].js',
  path : `${__dirname}/build`,
  publicPath : process.env.CDN_URL,
};
//------------------------------------------------------------
webPackConfig.plugins = [
  new HTMLPlugin({title : 'Full Stack Application! ^-^'}),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__ : JSON.stringify(process.env.API_URL),
  }),
  new ExtractTextPlugin('bundle.[hash].css'),
];

if(PRODUCTION) {
  webPackConfig.plugins = webPackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}
//------------------------------------------------------------
webPackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader', 
    },
    {
      test:  /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: [
          'css-loader', 
          'resolve-url-loader', 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, 
              includePaths: [`${__dirname}/src/style`],
            }
          }
        ]
      }),
    }
  ],
};
//------------------------------------------------------------
webPackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
};
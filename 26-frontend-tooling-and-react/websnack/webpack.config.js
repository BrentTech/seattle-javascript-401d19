const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    // configure the output of the total CSS file
    new ExtractPlugin('bundle.[hash].css'),
  ], 
  module: {
    // loaders
    rules: [
      {   
        // if the file ends in '.js' then load it with the babel loader,
        // but make sure the .js file wasn't in node_modules
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },  
      {   
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          use: [
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [`${__dirname}/src/style`],
              },
            },
          ],
        })
      },
    ],
  }
}
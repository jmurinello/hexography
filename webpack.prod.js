const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'progress.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  }
})

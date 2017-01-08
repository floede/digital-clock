var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './babel/index.js',
  output: { path: __dirname, filename: './js/index.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
};

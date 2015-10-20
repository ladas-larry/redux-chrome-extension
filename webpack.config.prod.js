var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    popup: "./src/scripts/popup.js",
    options: "./src/scripts/options.js"
  },
  output: {
    path: path.join(__dirname, 'dist/app/scripts'),
    filename: "[name]_bundle.js",
    //publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

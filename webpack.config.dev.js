var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/scripts/popup/index'
  ],
  output: {
    //path: path.join(__dirname, 'dist'),
    filename: 'popup_bundle.js',
    publicPath: 'http://localhost:3000/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

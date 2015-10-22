var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    popup: ["./src/scripts/popup.js", "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr"],
    options: ["./src/scripts/options.js", "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr"]
  },
  output: {
    path: path.join(__dirname, '.tmp'),
    filename: "[name]_bundle.js",
    publicPath: 'http://localhost:3000/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

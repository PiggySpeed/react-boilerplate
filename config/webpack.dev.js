const webpack = require('webpack');

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: 'build',
    hot: true,
    port: 8000
  }
};

module.exports = config;

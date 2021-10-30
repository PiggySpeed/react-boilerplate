const webpack = require('webpack');

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: 'build',
    hot: true,
    port: 8000
  }
};

module.exports = config;

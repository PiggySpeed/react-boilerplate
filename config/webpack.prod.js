const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './.env.production'
    })
  ],
};

module.exports = config;

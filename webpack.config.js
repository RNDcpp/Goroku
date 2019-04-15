const path = require('path');
module.exports={
  entry: './app/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: `babel-loader`,
        options: {
          presets: ['env', 'react'],
        },
      },
    }]
  }
};

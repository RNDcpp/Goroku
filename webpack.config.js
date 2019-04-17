const path = require('path');
module.exports={
  entry: './app/javascript/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/, // 拡張子がjsxで
      exclude: /node_modules/, // node_modulesフォルダ配下でなければ
      loader: 'babel-loader', // babel-loaderを使って変換する
      query: {
        presets: ["env","react"],
        plugins: ["transform-react-jsx"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
      }
    }]
  }
};

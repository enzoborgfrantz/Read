const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [['es2015', { modules: false }], 'react'],
        },
      }, {
        test: /\.svg$/,
        loaders: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            query: {
              es5: false,
              svgo: {
                pretty: true,
                plugins: [
                  { removeStyleElement: true },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [HtmlWebpackPluginConfig],
};

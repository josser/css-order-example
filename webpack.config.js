const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      './index.js'
    ]
  },

  output: {
    filename: '[name]-[hash:8].js',
    publicPath: '/'
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000
  },

  context: path.resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.jsx', '.json', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: { minimize: true }
        }]
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader',
          options: { minimize: true, importLoaders: 1, modules: true, localIdentName: '[name]_[local]_[hash:base64:5]' }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}

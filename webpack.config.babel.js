// var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })
//
// var PATHS = {
//   app: path.join(__dirname, 'app'), // it assumes that we want to access to ‘app/index.js’
//   build: path.join(__dirname, 'dist')
// }
//
// module.exports = {
//   entry: [
//     PATHS.app,
//   ],
//   output: {
//     path: PATHS.build,
//     filename: "index_bundle.js"
//   },
//   module: {
//     loaders: [
//       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
//       {test: /\.css$/, loader: 'style-loader!css-loader'},
//       { test: /\.json$/, loader: 'json-loader'}
//     ]
//   },
//   plugins: [HTMLWebpackPluginConfig],
//   devtool: 'cheap-module-source-map'
// }

//
// //NEW ---------------------

import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
}

console.log(PATHS);

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const base = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'},
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  resolve: {
    root: path.resolve('./app')
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
}

export default Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig)

const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contenthash].js',
    chunkFilename: '[id].[contenthash].js'
  },
  plugins: [new CleanWebpackPlugin(['dist/*.js'], { root: path.resolve(__dirname, '../') })]
})

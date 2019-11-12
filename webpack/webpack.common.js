const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/img/[name].[md5:hash:hex:8].[ext]'
        }
      },
      {
        test: /\.svg$/i,
        loader: 'file-loader',
        options: {
          name: 'static/svg/[name].[md5:hash:hex:8].[ext]'
        }
      },
      {
        test: /\.tsx?$/,
        loader: ['ts-loader']
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
      //inject: true,
      //chunksSortMode: 'none'
    })
  ]
}

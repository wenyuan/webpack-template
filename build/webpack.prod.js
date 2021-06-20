/**
 * Webpack 的生产环境配置文件
 */

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpackCommonConf = require('./webpack.common.js')
const { distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
  mode: 'production',

  output: {
    path: distPath,
    filename: 'js/[name].[contenthash:8].bundle.js',
  },

  module: {
    rules: [
      // 处理图片：考虑优化，之前通过使用 url-loader 实现
      // 小于 10kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        }
      },
      // 处理 CSS 和 LESS：考虑优化
      {
        test: /\.(css|less)$/,
        // 注意，这里不再用 style-loader
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify('production')
    }),
    // 抽离 CSS 到独立的文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
    // 忽略 moment 下的 /locale 目录（在使用时，为了能显示语言，需要动态引入语言包）
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
  ],

  optimization: {
    // 开启压缩 bundle
    minimize: true,
    // 压缩 css
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
    // 将所有公共模块单独打包
    splitChunks: {
      chunks: 'all'
    }
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
})

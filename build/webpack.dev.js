/**
 * Webpack 的开发环境配置文件
 */

const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackCommonConf = require('./webpack.common.js')
const { distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
  mode: 'development',

  module: {
    rules: [
      // 处理图片：直接引入图片 url，之前通过使用 file-loader 实现
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      // 处理 CSS 和 LESS
      {
        test: /\.(css|less)$/,
        // loader 的执行顺序是：从后往前，
        // 注意顺序：postcss-loader 要写在 css-loader 后面且在 less-loader 前面
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'development'
      ENV: JSON.stringify('development')
    }),
    // 使用 HMR
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port: 8080,
    progress: true,         // 显示打包的进度条
    contentBase: distPath,  // 根目录
    open: true,             // 自动打开浏览器
    compress: true,         // 启动 gzip 压缩
    hot: true,              // 启用 Webpack 的 HMR 功能
    // 设置代理
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
      '/api': 'http://localhost:3000',
    }
  }
})

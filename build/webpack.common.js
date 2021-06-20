/**
 * Webpack 的公共配置文件
 */

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { srcPath, distPath, publicPath } = require('./paths')

module.exports = {
  entry: path.join(srcPath, 'index'),

  module: {
    rules: [
      // 处理 JavaScript，且开启缓存
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'],
        include: srcPath,
      },
      // 处理 SVG：导出一个资源的 data URI。之前通过使用 url-loader 实现
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      // 处理字体：直接引入字体 url，之前通过使用 file-loader 实现
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name].[hash:6][ext]'
        }
      }
    ],
  },

  plugins: [
    // 清空 output.path 文件夹
    new CleanWebpackPlugin(),
    // 不需要处理的文件直接复制到输出目录
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicPath,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    // 根据模板生成 HTML 文件
    new HtmlWebpackPlugin({
      title: 'Webpack Template',
      favicon: path.join(srcPath, 'images', 'favicon.ico'),
      template: path.join(srcPath, 'template.html'),
      filename: 'index.html'
    })
  ],

  resolve: {
    // 指定模块默认加载的路径
    modules: [srcPath, 'node_modules'],
    // 引⼊模块时，可以省略哪些后缀名
    extensions: ['.js', '.vue', '.json'],
    // 配置模块解析的路径别名
    alias: {
      '@': srcPath,
    },
  },
}

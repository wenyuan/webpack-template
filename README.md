# Webpack Template

这是一份 Webpack5 的通用模板。

## 安装

```bash
git clone https://github.com/wenyuan/webpack-template.git

cd webpack-template/

npm install
```

## 使用

### 开发环境运行

```bash
npm run serve
```

开发环境下服务器将运行在 `localhost:8080`。

### 生产环境打包

```bash
npm run build
```

> 注意: 需要全局安装 [http-server](https://www.npmjs.com/package/http-server) 来部署一个简易的 http 服务器。

```bash
npm install http-server -g
```

通过在 `dist` 目录中创建一个服务器来查看打包后的页面效果。

```bash
cd dist/ && http-server
```

## 依赖包

这份通用模板用到的依赖包及具体用途如下：

> 下述依赖包均是通过 `npm install <package-name> --save-dev` 进行安装的。

### Webpack

最基础的依赖。

* [`webpack`](https://github.com/webpack/webpack)：包含 Webpack 核心内容
* [`webpack-cli`](https://github.com/webpack/webpack-cli)：包含 Webpack 操作的常见命令
* [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)：Webpack 的开发服务器
* [`webpack-merge`](https://github.com/survivejs/webpack-merge)：提供合并函数，用于合并配置文件

### Babel

Babel 用于将 ES6+ 语法编写的代码转换为向后兼容的 JavaScript 语法。

* [`@babel/core`](https://www.npmjs.com/package/@babel/core)：包含 Babel 转换的核心 API
* [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)：Babel 的默认设置，包含最近的 JavaScript 语法转换规则

### Loaders

专门用来处理那些非 JavaScript 文件的工具（Webpack 默认只能识别 JavaScript），将这些资源翻译成 Webpack 能识别的资源。

* 转换 JS
  * [`babel-loader`](https://webpack.js.org/loaders/babel-loader/)：用来转换 ES6+ 语法，需要创建一个 `.babelrc` 配置文件
* 处理 CSS
  * [`css-loader`](https://webpack.js.org/loaders/css-loader/)：负责遍历 CSS 文件，将 CSS 转化为 CommonJS（将 CSS 输出到打包后的 JS 文件中）
  * [`style-loader`](https://webpack.js.org/loaders/style-loader/)：负责把包含 CSS 内容的 JS 代码，挂载到页面的 style 标签中
* 处理 LESS
  * [`less`](https://webpack.js.org/loaders/less-loader/)：安装 Less.js，使项目支持 LESS 语法
  * [`less-loader`](https://webpack.js.org/loaders/less-loader/)：负责将 Less 编译为 CSS
* 处理 CSS 浏览器兼容性
  * [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/)：CSS 语法识别，需要创建一个 `postcss.config.js` 配置文件
  * [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env)：在 `postcss.config.js` 配置文件中添加的插件，用于为 CSS 语法添加浏览器兼容性的前缀。该插件集成了 [autoprefixer](https://github.com/postcss/autoprefixer) 且做了优化。

### Plugins

* [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)：每次打包之前，先删除输出目录中的历史文件（保证输出目录中的打包文件是最新的）
* [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin)：不需要处理的其他文件，可以直接复制到输出目录
* [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)：用于从模板创建 HTML 文件，创建的 HTML 文件默认引入打包后的所有资源文件
* [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)：抽离 CSS 到独立的文件
* [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)：优化和压缩 CSS（跟 `optimize-css-assets-webpack-plugin` 一样，但有一些优势）

## 版权信息

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, WenYuan

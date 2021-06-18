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

/**
 * Webpack 打包入口文件
 */

// 测试 JavaScript 模块的导入
import { getTitle, getSubTitle } from '@/js/example'

// 测试资源文件的导入
import tinyImg from '@/images/tiny-img.png' // < 8kb
import bigImg from '@/images/big-img.png'  // > 8kb

// 测试样式的导入
import '@/styles/index.less'

// 创建 DOM 节点
const titleTag = document.createElement('h1')
titleTag.textContent = getTitle()

const subTitleTag = document.createElement('h2')
subTitleTag.textContent = getSubTitle()

const tinyImgTag = document.createElement('img')
tinyImgTag.className = 'ting-img'
tinyImgTag.src = tinyImg

const bigImgTag = document.createElement('img')
bigImgTag.className = 'big-img'
bigImgTag.src = bigImg

const app = document.querySelector('#app')
app.append(titleTag, subTitleTag, tinyImgTag, bigImgTag)

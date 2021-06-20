import moment from 'moment'
import 'moment/locale/zh-cn' // 手动引入中文语言包
moment.locale('zh-cn')

export const getTitle = () => {
  return moment().format('ll')
}

export const getSubTitle = () =>
  `This Webpack5 Template using Babel and PostCSS with a hot dev server 
  and an optimized production build.`

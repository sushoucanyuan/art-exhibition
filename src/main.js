import Vue from 'vue'

import pcRouter from './router/pc'
import mobileRouter from './router/mobile'

import VueI18n from 'vue-i18n'
import moment from './common/moment'

import App from './App'

import './assets/scss/font.scss'
import './assets/scss/reset.scss'

Vue.use(VueI18n)
Vue.use(moment)

Vue.config.productionTip = false

let router = pcRouter

// 判断是否是移动端
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  router = mobileRouter
} 

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})

import Vue from 'vue'
import pcRouter from './router/pc'
import mobileRouter from './router/mobile'

import App from './App'

import './assets/scss/font.scss'
import './assets/scss/reset.scss'

Vue.config.productionTip = false

let router = pcRouter

// 判断是否是移动端
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  router = mobileRouter
} 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

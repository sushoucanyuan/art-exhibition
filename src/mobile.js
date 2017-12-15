import Vue from 'vue'
import retina from 'retinajs'
import { Lazyload } from 'mint-ui'
import { Pagination } from 'element-ui'
import { Header, Navbar, TabItem, Button } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(Pagination)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.use(VueAwesomeSwiper)
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: '/static/error.png',
  loading: '/static/loading.gif',
  attempt: 1
})

// retina
window.addEventListener('load', retina)

// rem
let docEls = document.documentElement
let resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize'

let recalcs = function() {
  window.rem = docEls.getBoundingClientRect().width / 25
  docEls.style.fontSize = window.rem + 'px'
}

recalcs()

window.addEventListener(resizeEvts, recalcs, false)
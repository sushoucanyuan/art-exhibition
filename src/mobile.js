import Vue from 'vue'
import retina from 'retinajs'
import { Pagination } from 'element-ui'
import { Header, Navbar, TabItem, Button } from 'mint-ui'

Vue.use(Pagination)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

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
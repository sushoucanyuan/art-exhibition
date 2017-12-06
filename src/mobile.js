import Vue from 'vue'
import retina from 'retinajs'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

window.addEventListener('load', retina)

let docEls = document.documentElement
let resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize'

let recalcs = function() {
  window.rem = docEls.getBoundingClientRect().width / 25
  docEls.style.fontSize = window.rem + 'px'
}

recalcs()

window.addEventListener(resizeEvts, recalcs, false)

Vue.use(MintUI)
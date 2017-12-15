import Vue from 'vue'
import { Lazyload } from 'mint-ui'
import {
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  RadioGroup,
  RadioButton,
} from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: '/static/error.png',
  loading: '/static/loading.gif',
  attempt: 1
})

Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Pagination)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(VueAwesomeSwiper)

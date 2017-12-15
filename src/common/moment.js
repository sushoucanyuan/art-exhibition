import moment from 'moment'

moment.locale('zh-cn')

export default {
  install: function(Vue, options) {
    Vue.moment = moment
  }
}
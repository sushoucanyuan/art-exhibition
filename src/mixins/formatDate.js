import Vue from 'vue'

export default {
  filters: {
    formatDate(value) {
      if (value) return Vue.moment.unix(value).format('YYYY.MM.DD')
      else return ''
    }
  }
}
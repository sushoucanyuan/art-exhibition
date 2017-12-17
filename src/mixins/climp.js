export default {
  filters: {
    climp(value, size) {
      return value.substr(0, size) + '...'
    }
  }
}
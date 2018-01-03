export default {
  filters: {
    climp(value, size) {
      let length = value.length
      if (length > size)
        return value.substr(0, size) + '...'
      else
        return value
    }
  }
}
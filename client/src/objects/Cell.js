var Cell = {
  value: '',
  revealed: false,
  isMine: function () {
    if (this.value == '*') {
      return true
    } else {
      return false
    }
  }
}

module.exports = Cell

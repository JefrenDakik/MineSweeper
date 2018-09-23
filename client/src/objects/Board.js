import Cell from './Cell.js'

var Board = {
  mines: 20,
  width: 10,
  height: 10,
  // This is a 2d array of Cell Objects
  matrix: [],
  generateMatrix: function () {
    this.initializeEmptyMatrix()
    this.placeMines()
    this.placeNumbers()
  },
  initializeEmptyMatrix: function () {
    for (let i = 0; i < this.height; i++) {
      this.matrix[i] = []
      for (let j = 0; j < this.width; j++) {
        this.matrix[i][j] = Object.create(Cell)
      }
    }
  },
  isValid: function (row, col) {
    return (row >= 0) && (row < this.height) &&
        (col >= 0) && (col < this.width)
  },
  countAdjacentMines: function (row, col) {
    let count = 0
    if (this.isValid (row - 1, col))
      if (this.matrix[row - 1][col].isMine())
        count++
    if (this.isValid (row + 1, col))
      if (this.matrix[row + 1][col].isMine())
        count++
    if (this.isValid (row, col + 1))
      if (this.matrix[row][col + 1].isMine())
        count++
    if (this.isValid (row, col - 1))
      if (this.matrix[row][col - 1].isMine())
        count++
    if (this.isValid (row - 1, col + 1))
      if (this.matrix[row - 1][col + 1].isMine())
        count++
    if (this.isValid (row - 1, col - 1))
      if (this.matrix[row - 1][col - 1].isMine())
        count++
    if (this.isValid (row + 1, col + 1))
      if (this.matrix[row + 1][col + 1].isMine())
        count++
    if (this.isValid (row + 1, col - 1))
      if (this.matrix[row + 1][col -1].isMine())
        count++
    return count
  },
  placeNumbers: function () {
    for (let i = 0; i < Board.height; i++) {
      for (let j = 0; j < Board.width; j++) {
        let cell = this.matrix[i][j]
        if (!cell.isMine()) {
          cell.value = this.countAdjacentMines(i, j)
        }
      }
    }
  },
  placeMines: function () {
    let placed_mines = 0
    while (placed_mines < this.mines) {

      let rand_column = Math.floor((Math.random() * this.width))
      let rand_row = Math.floor((Math.random() * this.height))
      let rand_cell = this.matrix[rand_row][rand_column] 

      if (!rand_cell.isMine()) {
        rand_cell.value = '*'
        placed_mines++
      }
    }
  }
}


export default Board

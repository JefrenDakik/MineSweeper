<script>
import Cell from '@/components/game_components/Cell'
import Board from '@/objects/Board'

export default {
  name: 'Board',
  components: {
    Cell
  },
  data () {
    return {
      board: null
    }
  },
  render: function (createElement) {
    return createElement('div',
      this.board.matrix.map(function (row, x) {
        return row.map(function (cell, y) {
          return createElement('Cell', {
            props: {
              x: x,
              y: y,
              value: cell.value
            },
            style: {
              float: 'left',
            }
          })
        })
      })
    )
  },
  created () {
    this.board = Object.create(Board)
    this.board.generateMatrix()

    this.$root.$on('click', (coordinate) => {
      console.log(coordinate.x + ' ' + coordinate.y)
    })
  },
  mounted: function mounted () {
    // console.log(this.matrix[0][0])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .square {
    width: 20px;
    height: 20px;
    background-color: cyan;
  }
</style>

<template>
  <v-layout row justify-center>
    <v-flex xs5>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <board class="board">
        </board>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Board from '@/components/game_components/Board'

export default {
  name: 'Home',
  components: {
    Board
  },
  methods: {
  },
  mounted: function mounted () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board {
  width: 500px;
  height: 500px;
}
</style>

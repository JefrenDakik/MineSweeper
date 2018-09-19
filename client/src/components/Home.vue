<template  id='Home'>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <h1>Home</h1>
        <v-btn id="btn" ref="111">
        </v-btn>
        <div>
          hahah
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import Cell from '@/components/game_components/Cell'
export default {
  name: 'Home',
  props: {
    render: {
      type: Function,
      required: true
    }
  },
  render: function (createElement) {
    return createElement('h1', {
      attrs: {
        id: 'igor'
      },
      domProps: {
        innerHTML: 'hello world'
      }
    })
  },
  components: {
    // Cell
  },
  data () {
    return {
      msg: 'msg'
      // array: [ [1, 2], [3, 4], [5, 6] ]
    }
  },
  mounted: function mounted () {
    document.getElementById('btn').addEventListener('click', this.createDiv)
  },
  methods: {
    createDiv: function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

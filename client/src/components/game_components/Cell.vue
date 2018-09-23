<template>
  <div class="square" v-on:click="clicked">
    {{value}}
  </div>
</template>

<script>
export default {
  props: [
    'x',
    'y',
    'value',
    'state'
  ],
  data () {
    return {
      col: this.x,
      row: this.y
    }
  },
  methods: {
    clicked: function () {
      let coordinate = {}
      coordinate.x = this.x
      coordinate.y = this.y
      this.$root.$emit('click', coordinate)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .square {
    width: 50px;
    height: 50px;
    border-style: groove;
    vertical-align: middle;
    background-color: cyan;
  }
</style>

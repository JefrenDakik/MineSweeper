<template>
  <v-layout column>
    <v-flex>
      <panel title="Friends">
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import FriendsService from '@/services/FriendsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = await FriendsService.index()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

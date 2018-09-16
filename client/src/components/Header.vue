<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo('root')">
        MineSweeper
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
        Home
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo('login')">
          Login
      </v-btn>

      <v-btn flat dark
        @click="navigateTo('register')">
          Sign Up
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: white;
  }
</style>

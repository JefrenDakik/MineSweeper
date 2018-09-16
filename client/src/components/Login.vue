<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
          <div class="pl-6 pr-6 pt-2 pb-2">
            <v-text-field type="email" name="email" placeholder="email" v-model="email">
            </v-text-field>
            <br>
            <v-text-field type="password" name="password" placeholder="password" v-model="password">
            </v-text-field>
            <br>
            <div v-html="error"></div>
            <br>
            <v-btn id="btn_register">Login</v-btn>
          </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  mounted: function mounted () {
    document.getElementById('btn_register').addEventListener('click', this.login)
  },
  methods: {
    async login () {
      try {
        await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

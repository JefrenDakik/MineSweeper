<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <panel title="Login">
          <form name="register-form">
            <v-text-field type="email" name="email" placeholder="email" v-model="email">
            </v-text-field>
            <br>
            <v-text-field type="password" name="password" placeholder="password" v-model="password">
            </v-text-field>
            <br>
            <div v-html="error"></div>
            <br>
            <v-btn id="btn_register">Login</v-btn>
          </form>
        </panel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
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
        const response = await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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

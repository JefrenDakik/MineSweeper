<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <panel title="Regsiter">
          <form name="register-form" autocomplete="off">
            <v-text-field type="text" name="user_name" placeholder="username" v-model="user_name">
            </v-text-field>
            <br>
            <v-text-field type="email" name="email" placeholder="email" v-model="email">
            </v-text-field>
            <br>
            <v-text-field type="password" name="password" placeholder="password" v-model="password">
            </v-text-field>
            <br>
            <div v-html="error"></div>
            <br>
            <v-btn id="btn_register">Register</v-btn>
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
      user_name: '',
      email: '',
      password: '',
      error: null
    }
  },
  mounted: function mounted () {
    document.getElementById('btn_register').addEventListener('click', this.register)
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationServices.register({
          user_name: this.user_name,
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setToken', response.data.token)
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

<template>
  <div>
    <form @submit.prevent="onSignIn">
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input id="email"
               name="email" required
               type="user.email"
               class="form-control"
               v-model="user.email"
        >
      </div>
      <div class="alert alert-danger" v-if="false">
        <strong>Danger!</strong> Please enter a proper email address.
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input id="pwd"
               name="password"
               type="password"
               class="form-control"
               v-model="user.password"
        >
      </div>
      <div class="alert alert-danger" v-if="false">
        <strong>Danger!</strong> Your password is required.
      </div>
      <!--<div class="checkbox">-->
      <!--<label><input type="checkbox"> Remember me</label>-->
      <!--</div>-->
      <button class="btn btn-primary">SIGN IN</button>
      <button type="reset" class="btn btn-default" @click="onReset">RESET</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSignIn () {
        this.$store.dispatch('userSignIn', this.user);
      },
      onReset () {
        this.user.email = '';
        this.user.password = '';
      }
    }
  }
</script>
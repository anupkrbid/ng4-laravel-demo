<template>
  <div>
    <form  @submit="onSignUp">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name"
               name="name"
               type="text"
               class="form-control"
               v-model="user.name"
        >
      </div>
      <div>
        <div class="alert alert-danger" v-if="false">
          <strong>Danger!</strong> Your Name is Required!
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email Address:</label>
        <input id="email"
               name="email"
               type="email"
               class="form-control"
               v-model="user.email"
        >
      </div>
      <div v-if="false">
        <div class="alert alert-danger">
          <strong>Danger!</strong> Your Email Address is Required!
        </div>
        <div class="alert alert-danger">
          <strong>Danger!</strong> Please Enter a Proper Email Address!
        </div>
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
      <div>
        <div class="alert alert-danger" v-if="false">
          <strong>Danger!</strong> Your Password is Required!
        </div>
      </div>

      <div class="form-group">
        <label for="cnf_pwd">Confirm Password:</label>
        <input id="cnf_pwd"
               name="cnf_password"
               type="password"
               class="form-control"
               v-model="user.confirmPassword"
        >
      </div>
      <div>
        <div class="alert alert-danger" v-if="false">
          <strong>Danger!</strong> Confirming Password is Required!
        </div>
      </div>

      <!--<div class="checkbox">-->
      <!--<label><input type="checkbox"> Remember Me</label>-->
      <!--</div>-->

      <button class="btn btn-primary">SIGN UP</button>
      <button type="reset" class="btn btn-default" @click="onReset">RESET</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      onSignUp () {
        console.log('User Sign Up Details : ', this.user);
      },
      onReset () {
        this.user.email = '';
        this.user.password = '';
        this.user.password = '';
        this.user.confirmPassword = '';
      }
    }
  }
</script>
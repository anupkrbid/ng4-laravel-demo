<template>
  <div class="row">
    <div class="col-xs-12">
      <ul class="nav nav-tabs">
        <router-link :to="route.url" tag="li" active-class="active" v-for="route in routes" :key="route.url" exact><a>{{ route.name }}</a></router-link>
        <li v-if="isLoggedIn"><a @click="onSignOut">Sign Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.commit('checkUserAuthentication');
    },
    computed: {
      routes () {
        if(this.isLoggedIn){
          return [
            { name: 'Quotes', url: '/quotes'},
            { name: 'Add New Quotes', url: '/new-quote'}
          ];
        }
        return [
          { name: 'Sign Up', url: '/sign-up'},
          { name: 'Sign In', url: '/sign-in'}
        ];
      },
      isLoggedIn () {
        return this.$store.getters.isAuthenticated;
      }
    },
    watch: {
      isLoggedIn (value) {
        if(value){
          this.$router.push('/quotes');
        } else {

          this.$router.push('/login');
        }
      }
    },
    methods: {
      onSignOut () {
        this.$store.dispatch('userSignOut');
        console.log('SIGN OUT CLICKED');
      }
      }
  }
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueResource)
Vue.http.options.root = 'http://ng4-laravel.local/api/'
Vue.http.interceptors.push((request, next) => {
  next(response => {
    if(response.status === 401 || response.status === 400) {
      localStorage.removeItem( 'token' );
      this.$store.commit('checkUserAuthentication');
    }
  });
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

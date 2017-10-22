import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store'

import App from './App.vue'
import router from './router'

Vue.use(VueResource)
Vue.http.options.root = 'http://ng4-laravel.local/api/'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

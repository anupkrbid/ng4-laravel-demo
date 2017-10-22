import Vue from 'vue'
import Router from 'vue-router'

import Quotes from '../components/Quotes.vue'
import NewQuote from '../components/NewQuote.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/sign-in', name: 'SignIn', component: SignIn },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/quotes', name: 'Quotes', component: Quotes },
    { path: '/new-quote', name: 'NewQuote', component: NewQuote }
  ]
})

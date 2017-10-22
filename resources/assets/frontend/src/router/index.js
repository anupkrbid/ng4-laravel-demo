import Vue from 'vue'
import Router from 'vue-router'

import Quotes from '../components/Quotes.vue'
import NewQuote from '../components/NewQuote.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import AuthGuard from './guards/auth-guard'
import NotAuthGuard from './guards/not-auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/sign-in' },
    { path: '/sign-in', name: 'SignIn', component: SignIn, beforeEnter: NotAuthGuard },
    { path: '/sign-up', name: 'SignUp', component: SignUp,beforeEnter: NotAuthGuard },
    { path: '/quotes', name: 'Quotes', component: Quotes, beforeEnter: AuthGuard },
    { path: '/new-quote', name: 'NewQuote', component: NewQuote, beforeEnter: AuthGuard },
    { path: '*', redirect: '/sign-in' },
  ]
})

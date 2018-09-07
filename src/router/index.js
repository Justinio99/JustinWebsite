import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import AboutMe from '../components/AboutMe/AboutMe.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/aboutMe',
    name: 'Aboutme',
    component: AboutMe
  }]
})

export default router

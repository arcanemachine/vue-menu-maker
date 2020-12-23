import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '../views/Hello.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    
    path: '/world/',
    name: 'world',
    component: () => import ('../views/World.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import ('../views/Register.vue')
  },
  {
    path: '/register/success',
    name: 'registerSuccess',
    component: () => import ('../views/RegisterSuccess.vue')
  },
  {
    path: '/register/confirm-email/:confirmToken',
    name: 'registerConfirm',
    component: () => import ('../views/RegisterConfirm.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import ('../views/Logout.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurantList',
    component: () => import ('../views/RestaurantList.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import ('../views/_404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

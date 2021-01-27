import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Managers from '../views/Managers.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Managers',
    component: Managers
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Managers from '../views/Managers.vue'
import EditingManagers from '../views/EditingManagers.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Managers',
    component: Managers
  },
  {
    path: '/editing-manager/:id',
    name: 'EditingManager',
    component: EditingManagers
  }
]

const router = new VueRouter({
  routes
})

export default router

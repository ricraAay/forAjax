import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Managers from '@/views/Managers.vue'
import EditingManagers from '@/views/EditingManagers.vue'
import CreatedManager from '@/views/CreatedManager.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Managers',
    component: Managers
  },
  {
    path: '/manager/:id',
    name: 'EditingManager',
    component: EditingManagers
  },
  {
    path: '/registration',
    name: 'CreatedManager',
    component: CreatedManager
  }
]

const router = new VueRouter({
  routes
})

export default router

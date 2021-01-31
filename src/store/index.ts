import Vue from 'vue'
import Vuex from 'vuex'

//Modules 
import managers from './modules/managers'
import departments from './modules/departments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    managers,
    departments
  }
})

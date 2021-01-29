import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'

import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCwpKNy4nH_iSsaiQqNDjfteRnEbF1nI14",
  authDomain: "list-of-managers.firebaseapp.com",
  databaseURL: "https://list-of-managers-default-rtdb.firebaseio.com",
  projectId: "list-of-managers",
  storageBucket: "list-of-managers.appspot.com",
  messagingSenderId: "977229985780",
  appId: "1:977229985780:web:b477da2c0c57033bdf6ba1"
})

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')





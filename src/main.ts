import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'

import 'firebase/firestore'

firebase.initializeApp({
  apiKey: process.env.VUE_API_KEY,
  authDomain: process.env.VUE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_DATABASE_URL,
  projectId: process.env.VUE_PROJECT_ID,
  storageBucket: process.env.VUE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

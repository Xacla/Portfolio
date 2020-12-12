import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'

import firebase from "firebase/app";
import {firebaseConfig} from '../config/firebase-config'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.prototype.$axios=axios
Vue.config.productionTip = false

Vue.use(router)

new Vue({
  router,
    render: h => h(App),
  }).$mount('#app')
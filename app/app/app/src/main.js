import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import firebase from "firebase/app";

import {firebaseConfig} from '../config/firebase-config'

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

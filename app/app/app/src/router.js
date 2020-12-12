import Vue from 'vue'
import Home from './Home.vue'
import Signup from './Signup.vue'
import VueRouter from 'vue-router'  

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup
      }
    ]
  })
  
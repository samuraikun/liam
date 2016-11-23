import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMdl from 'vue-mdl'

Vue.use(VueRouter)
Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

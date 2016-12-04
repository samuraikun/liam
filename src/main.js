import Vue from 'vue'
import store from './store'
import App from './App'
import VueRouter from 'vue-router'
import VueMdl from 'vue-mdl'

Vue.use(VueRouter)
Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

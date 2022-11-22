import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})


new Vue({
  vuetify,
  store,
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
import routes from "@/routers"

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

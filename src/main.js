import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //使用Vue实例new一个事件总线

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import fastclick from 'fastclick'
import vuelazyload from 'vue-lazyload'

Vue.use(ElementUI)

Vue.use(vuelazyload,{
  loading:require('assets/img/home/load.png')
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //使用Vue实例new一个事件总线

//解决移动端300ms延迟问题
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

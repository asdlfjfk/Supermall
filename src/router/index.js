import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Classify = () => import('../views/Classify/Classify.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Mine = () => import('../views/Mine/Mine.vue')


Vue.use(Router)


const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/classify',
    component: Classify
  },
  {
    path:'/mine',
    component: Mine
  },
  {
    path:'/cart',
    component: Cart
  },
]

const router  = new Router({
  routes,
  mode:'history'
})


export default router

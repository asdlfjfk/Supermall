import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Category = () => import('../views/Category/Category.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Mine = () => import('../views/Mine/Mine.vue')
const Detail = () => import('../views/Detail/Detail.vue')


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
    path:'/category',
    component: Category
  },
  {
    path:'/mine',
    component: Mine
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/detail/:id',
    component: Detail
  }
]

const router  = new Router({
  routes,
  mode:'history'
})


export default router

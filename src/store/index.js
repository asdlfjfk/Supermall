import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
      cartList:[]
  },
  mutations:{
    //mutations唯一的目的是修改state中的状态
    //mutations中的每个方法尽可能完成的事件单一一些
    //较复杂的逻辑可以放在actions当中
    addCounter(state,payload){
      payload.count += 1
    },
    addgoods(state,payload){
      state.cartList.push(payload)
    }
  },
  actions:{
    addTocartList(context,payload){

      return new Promise((resolve,reject) => {
        //payload：添加的商品
        if(context.state.cartList.length === 0){
          context.state.cartList.push(payload)
        }
        else if (context.state.cartList.length !== 0) {
          //查找之前数组中是否存在该商品
          let product = context.state.cartList.find(item => item.iid === payload.iid)
          if (product){
            // product.count += 1
            context.commit('addCounter',product)
            resolve('商品数量加一')
          }else {
            // context.state.cartList.push(payload)
            context.commit('addgoods',payload)
            resolve('添加商品成功')
          }
        }
      })


    }
  },
  getters
})


export default store

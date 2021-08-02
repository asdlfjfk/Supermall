<template>
    <div class="bottom-bar">

      <div class="check-content" @click="allCheck">
        <check-button class="check-button" :is-checked="isSelectAll"/>
        <span>全选</span>
      </div>

      <div class="count">
        合计:{{totalPrice}}
      </div>
      <div class="calc">去结算:{{checklength}}</div>
    </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex'
    export default {
        name: "CartBottomBar",
        computed:{
          ...mapGetters(['cartList']),
          totalPrice(){
            return '￥' + this.cartList.filter(item => {
              return item.checked  //过滤出购物车中选中的商品
            }).reduce((prevalue,item) => {
                prevalue += item.price * item.count
                return prevalue
            },0).toFixed(2) //0为总价默认值 toFixed保留2位小数
          },
          checklength(){
            // return this.cartList.filter(item => {
            //   return item.checked
            // }).reduce((prevalue,item) => {
            //   prevalue += item.count
            //   return prevalue
            // },0)
            return this.cartList.filter(item => item.checked).length
          },
          isSelectAll(){
            //去除购物车没有任何一件商品时 全选为true的情况
            if (this.cartList.length === 0){
              return false
            }
            else {
              //不存在未选中的商品则返回true 则全选亮
              return !(this.cartList.filter(item => !item.checked).length)
            }
          },
        },
        methods:{
          allCheck(){
            if (this.cartList.length === 0){
              return false
            }
            else {
              if (this.isSelectAll === true){
                  // for (let item of this.cartList){
                  //   item.checked = false
                  // }
                  this.cartList.forEach(item => item.checked = false)
              }else {
                // for (let item of this.cartList){
                //   item.checked = true
                // }
                this.cartList.forEach(item => item.checked = true)
              }
            }
          }
        },
        components:{
          CheckButton
        }
    }
</script>

<style scoped>
.bottom-bar{
  background-color: #dbe5ec;
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
}

.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
}
.check-content{
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-left: 10px;
  width: 60px;
}

.count{
  color: #ff5777;
  padding-left: 50px;
  flex: 1;
  font-size: 13px;
}

.calc{
  width: 90px;
  color: white;
  text-align: center;
  background-color: orangered;
  font-size: 14px;
}
</style>

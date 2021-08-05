<template>
  <div class="cart">
    <!--导航-->
    <nav-bar id="navcart">
      <div slot="center" align="center" class="main" v-if="length !== 0">购物车({{length}})</div>
      <div slot="center" align="center" class="main" >购物车</div>
    </nav-bar>

    <!--购物车商品列表-->
    <cart-list/>

    <!--底部商品价格汇总-->
    <cart-bottom-bar/>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import CartList from './childComponents/CartList'
  import CartBottomBar from './childComponents/CartBottomBar'
  import { mapGetters } from 'vuex'

    export default {
        name: "Cart",
        components: {NavBar,CartList,CartBottomBar},
        computed:{
          // ...mapGetters(['cartLength','cartList'])
          ...mapGetters({
            length:'cartLength',
            List:'cartList'
          })
        },
    }
</script>

<style scoped>
  .main{
    font-size:14px;font-weight:bold;
    padding:4px;
    filter:
      Dropshadow(offx=1,offy=0)
      Dropshadow(offx=0,offy=1)
      Dropshadow(offx=0,offy=-1)
      Dropshadow(offx=-1,offy=0);
    color:#fff;
  }
  #navcart{
    background-color: var(--color-tint);

    position: fixed; /*使导航栏脱离 上下滚动时不跟着动*/
    left: 0;
    right:0;
    top: 0;
    z-index:9; /*使脱离的导航栏显示*/
  }

  .cart{
    height: 100vh;
  }

</style>

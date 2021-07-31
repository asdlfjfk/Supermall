<template>
    <div class="cart-list">
      <scroll class="content" ref="bscroll">
          <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"/>
      </scroll>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Scroll from '../../../components/common/better-scroll/BScroll'
  import CartListItem from '../childComponents/CartListItem'

    export default {
        name: "CartList",
        components:{
          Scroll,
          CartListItem
        },
        computed:{
          ...mapGetters(['cartList'])
        },
      //到购物车页面时刷新一下获取正确的高度
        activated(){
          this.$refs.bscroll.refresh()
        }
    }
</script>

<style scoped>
  .cart-list{
    margin-top: 44px;
    height: calc(100% - 44px - 55px - 40px);
  }

  .content{
    height: 100%;
    overflow: hidden;
  }
</style>

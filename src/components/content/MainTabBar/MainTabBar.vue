<template>
  <TabBar>

    <tab-bar-item link="/home">
      <img src="~assets/img/tabbar/Home.svg" slot="item-icon">
      <img src="~assets/img/tabbar/HomeActive.svg" slot="item-iconActive">
      <div slot="item-text">首页</div>
    </tab-bar-item>



    <tab-bar-item link="/classify">
      <img src="~assets/img/tabbar/Classify.svg" slot="item-icon">
      <img src="~assets/img/tabbar/ClassifyActive.svg" slot="item-iconActive">
      <div slot="item-text">分类</div>
    </tab-bar-item>



    <tab-bar-item link="/cart">
      <img src="~assets/img/tabbar/Cart.svg" slot="item-icon">
      <img src="~assets/img/tabbar/CartActive.svg" slot="item-iconActive">
      <div slot="item-text">购物车</div>
    </tab-bar-item>



    <tab-bar-item link="/mine">
      <img src="~assets/img/tabbar/Mine.svg" slot="item-icon">
      <img src="~assets/img/tabbar/MineActive.svg" slot="item-iconActive">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </TabBar>
</template>

<script>
  import TabBar from '../../../components/common/tabbar/TabBar'
  import TabBarItem from '../../../components/common/tabbar/TabBarItem'
    export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>

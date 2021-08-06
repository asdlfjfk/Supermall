<template>
  <div id="mine">
    <nav-bar id="navmine">
      <div slot="center" align="center" id="main">用户中心</div>
    </nav-bar>

    <div align="center" class="header">
      <img src="~assets/img/Mine/head.jpg" alt="" class="headimg" >
      <p class="text">用户:CoderTpy</p>
    </div>

    <MineItem>
      <img src="~assets/img/Mine/pay.png" alt="" slot="left">
      <p slot="center">支付</p>
      <img src="~assets/img/Mine/arrow.png" alt="" slot="right">
    </MineItem>

    <MineItem>
      <img src="~assets/img/Mine/star.png" alt="" slot="left">
      <p slot="center">收藏</p>
      <img src="~assets/img/Mine/arrow.png" alt="" slot="right">
    </MineItem>

    <MineItem>
      <img src="~assets/img/Mine/sub.png" alt="" slot="left">
      <p slot="center">订阅</p>
      <img src="~assets/img/Mine/arrow.png" alt="" slot="right">
    </MineItem>

    <MineItem>
      <img src="~assets/img/Mine/send.png" alt="" slot="left">
      <p slot="center">待发货</p>
      <img src="~assets/img/Mine/arrow.png" alt="" slot="right">
    </MineItem>

    <MineItem>
      <img src="~assets/img/Mine/receipt.png" alt="" slot="left">
      <p slot="center">待收货</p>
      <img src="~assets/img/Mine/arrow.png" alt="" slot="right">
    </MineItem>

    <div class="shadow"></div>

    <MineItem>
      <img src="~assets/img/Mine/set.png" alt="" slot="left">
      <p slot="center">设置</p>
      <img src="~assets/img/Mine/arrow.png" alt="" slot="right">
    </MineItem>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import MineItem from './child/MineItem'

    export default {
        name: "Mine",
      components: {NavBar,MineItem}
    }
</script>

<style scoped>
  #main{
    font-size:14px;font-weight:bold;
    padding:4px;
    filter:
      Dropshadow(offx=1,offy=0)
      Dropshadow(offx=0,offy=1)
      Dropshadow(offx=0,offy=-1)
      Dropshadow(offx=-1,offy=0);
    color:#fff;
  }
  #navmine{
    background-color: var(--color-tint);

    position: fixed; /*使导航栏脱离 上下滚动时不跟着动*/
    left: 0;
    right:0;
    top: 0;
    z-index:9; /*使脱离的导航栏显示*/
  }

  .header{
    box-shadow: 1px 5px 1px 5px rgba(128,128,128,.2);
  }

  .headimg{
    margin-top: 55px;
    width: 80px;
    height: 80px;
    border-radius: 37px;
  }

  .text{
    padding: 6px;
  }

  .shadow{
    box-shadow: 1px 5px 1px 5px rgba(128,128,128,.2);
  }
</style>

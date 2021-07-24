<template>
  <div id="mine">
    <nav-bar id="navmine">
      <div slot="center" align="center" id="main">用户中心</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Mine",
      components: {NavBar}
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
</style>

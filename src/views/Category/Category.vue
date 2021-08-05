<template>
  <div class="category">
    <nav-bar id="navcategory">
      <div slot="center" align="center" id="main">分类</div>
    </nav-bar>

    <div class="main">
      <categoryLeft/>
      <categoryRight/>
    </div>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import categoryLeft from './childcomponents/categoryLeft'
  import categoryRight from './childcomponents/categoryRight'
  import bscroll from "components/common/better-scroll/BScroll"

    export default {
      name: "Category",
      components: {
        NavBar,
        categoryLeft,
        categoryRight,
        bscroll
      },
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
  #navcategory{
    background-color: var(--color-tint);

    position: fixed; /*使导航栏脱离 上下滚动时不跟着动*/
    left: 0;
    right:0;
    top: 0;
    z-index:9; /*使脱离的导航栏显示*/
  }

  .category{
    height: 100vh;
    width: 100%;
  }

  .content{
    margin-top: 44px;
  }

  .control{

  }
  /*.wrapper{*/
    /*height: 150px;*/
    /*background-color: deepskyblue;*/
    /*overflow: hidden;*/
  /*}*/

  .main {
    display: flex;
    font-size: 0.7rem;
    height: calc(100vh - 2.09rem - 1.9rem);
  }
</style>

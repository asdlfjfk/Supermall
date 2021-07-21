<template>
  <div id="cart">
    <nav-bar id="navcart">
      <div slot="center" align="center" id="main">购物车</div>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Cart",
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
  #navcart{
    background-color: var(--color-tint);
  }
</style>

<template>
    <div class="nav-bar">
      <div class="left" align="center"><slot name="left"></slot></div>
      <div class="center" align="center"><slot name="center"></slot></div>
      <div class="right" align="center"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.1);
  }

  .left,.right{
    width: 60px;
  }

  .center{
    /*占据剩余的空间*/
    flex: 1;
  }
</style>

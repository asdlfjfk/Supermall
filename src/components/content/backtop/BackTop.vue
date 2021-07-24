<template>
    <div class="back-top">
      <img src="../../../assets/img/backtop/back-top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
.back-top{
  z-index: 10;
  position: fixed;
  right: 16px;
  bottom: 66px;
}

  .back-top img{
    width: 50px;
    height: 50px;
  }
</style>

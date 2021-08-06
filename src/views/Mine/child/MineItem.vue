<template>
    <div class="item">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "MineItem"
    }
</script>

<style scoped>
  .item {
    margin-top: 10px;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.1);
    display: flex;
    align-items: center;
  }

  .item img{
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-left: 5px;
  }

  .center{
    margin-bottom: 4px;
    margin-left: 10px;
  }

  .right{
    flex: 1;
    text-align: right;
  }
</style>

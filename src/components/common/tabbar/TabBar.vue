<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: rgba(255,255,255,0.9);
    border-radius: 15px;

    position: fixed;
    left: 10px;
    right: 10px;
    bottom: 14px;

    /*阴影*/
    box-shadow: 0px 0px 0px 1px rgba(100,100,100,0.2);

  }

</style>

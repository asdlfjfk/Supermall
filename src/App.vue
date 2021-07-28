<template>
  <div id="app">
    <!--keep-alive让路由切换时之前的组件不销毁 Detail除外 因为Detail需要实时更新-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

   <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>

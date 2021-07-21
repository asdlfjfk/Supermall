<template>
  <el-carousel :interval="5000" arrow="always" height="170px">
    <el-carousel-item v-for="item in banner" :key="item.index">
      <a :href="item.link">   <!--服务器取回的数据调用都需要v-bind绑定-->
        <img :src="item.image" id="img">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>


    export default {
        name: "HomeCarousel",
        props:{  //数据由父组件传递过来
          banner:{
            type:Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
  #img {
    width:100%; /* 设置图片自适应 */
    height:100%;
  }
</style>

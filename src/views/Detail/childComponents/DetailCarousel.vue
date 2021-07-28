<template>
    <el-carousel class="carousel">
      <el-carousel-item v-for="item in topImages" :key="item.index" class="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "DetailCarousel",
        props:{
            topImages:{
              type:Array,
              default(){
                return[]
              }
            }
        }
    }
</script>

<style scoped>
.carousel{
  height:300px;
  overflow: hidden;
}

.carousel img{
  height: auto;
  width: 100%;
  overflow: hidden;
  align: center;
}

</style>

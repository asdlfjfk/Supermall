<template>
    <div class="featureview">
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="featureload">
      </a>
    </div>
</template>

<script>
    export default {
        name: "HomeFeatureView",
        methods:{
          featureload(){
            this.$emit('featureload')
          }
        }
    }
</script>

<style scoped>
.featureview img{
  width: 100%;
}
</style>

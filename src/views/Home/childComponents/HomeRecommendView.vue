<template>
    <div class="recommend">

      <div v-for="item in recommend" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image">
          <div>{{item.title}}</div>
        </a>
      </div>

    </div>
</template>

<script>
    export default {
      name: "HomeRecommendView",
      props:{
        recommend: {
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
    .recommend{
      /*水平布局*/
      display: flex;
      text-align: center;
      font-size: 12px;

      padding: 15px 0 15px;
      border-bottom: 10px solid #eee ;
    }

    .recommend-item{
      /*均等分*/
      flex: 1;
    }

    .recommend-item img{
      width: 65px;
      height: 65px;
      margin-bottom: 5px;
    }
</style>

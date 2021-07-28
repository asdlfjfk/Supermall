<template>
    <div v-if="Object.keys(goodsInfo).length !== 0" class="goodsInfo">
      <div class="info">
        <div class="start"></div>
        <div class="desc">{{goodsInfo.desc}}</div>
        <div class="end"></div>
      </div>


        <div class="key">{{goodsInfo.detailImage[0].key}}</div>

        <div class="list">
          <img v-for="(item,index) in goodsInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imageLoad">
        </div>

    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        data(){
          return{
            counter:0,
            imagesLength:0
          }
        },
        props:{
          goodsInfo:{
            type:Object,
            default(){
              return {}
            }
          }
        },

        //使用watch监听属性的变化
        watch:{
          goodsInfo() {
            //获取图片个数
            this.imagesLength = this.goodsInfo.detailImage[0].list.length
          }
        },
        methods:{
          imageLoad(){
            this.counter++
            //当所有图片载入完成再发射事件
            if (this.counter === this.imagesLength) {
              this.$emit('detailImageLoad')
            }
          }
        }
    }
</script>

<style scoped>
  .goodsInfo{
    margin-top: 5px;
  }

  .info {
    position: relative;
  }
  .start {
    width: 60px;
    height: 1px;
    background-color: #333;
    margin-left: 4px;
  }

  .start:before{
     position: absolute;
     left: 4px;
     top: -2.5px;
     display: block;
     content: '';
     width: 5px;
     height: 5px;
     background-color: #333;
   }

  .end {
    width: 60px;
    height: 1px;
    background-color: #333;
    position: absolute;
    right: 4px;
    bottom: 0;
  }

  .end:after{
    position: absolute;
    right: 0;
    top: -2.5px;
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
  }

  .desc {
    padding: 10px 4px;
    font-size: 13px;
  }

  .key{
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 6px;
    line-height: 20px;
    margin: 4px 0;
    text-indent: 10px;
  }

  .list img{
    width: 100%;
  }
</style>

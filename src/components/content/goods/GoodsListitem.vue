<template>
    <div class="goods-item" @click="itemClick">
        <img :src="showImage" @load="imgload">

      <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="star">{{goodsitem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListitem",
        props:{
          goodsitem:{
            type:Object,
            default(){
              return {}
            }
          }
        },
      methods:{
          //监听图片加载
        imgload(){
          if (this.$route.path === '/home'){
            this.$bus.$emit('imgload')
          }
          if (this.$route.path === '/detail'){
            this.$bus.$emit('imgload2')
          }
        },
        itemClick(){
          //商品详情页跳转更合适push而不是replace 可以更好的返回
          this.$router.push('/detail/' + this.goodsitem.iid).catch(err => {
            console.log(err);
          })
        }
      },
      computed: {
        showImage(){
          return  this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img
        }
      },
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    padding-bottom: 40px;
    position: relative;

  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .star{
      position: relative;
  }

  .goods-info .star::before {
    content:'';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/home/collect_icon.png") 0 0/14px 14px;
  }
</style>

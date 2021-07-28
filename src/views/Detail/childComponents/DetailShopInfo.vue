<template>
  <div class="shopInfo" v-if="Object.keys(shopInfo).length !== 0 ">

    <div class="top">
      <img :src="shopInfo.logo" alt="">
      <span class="title">{{shopInfo.name}}</span>
    </div>

    <div class="shop-middle">

      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量 </div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shopInfo.goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <!--描述相符-->
            <td>{{item.name}}</td>
            <!--价格合理-->
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <!--质量满意-->
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="enter-shop-wrap">
        <div class="enter-shop">进店逛逛</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
            shopInfo:{
              type:Object,
              default(){
                return{}
              }
            }
        },
        filters: {
          sellCountFilter(value){
            if (value < 10000) return value;
            return (value/10000).toFixed(1)+'万'
          }
        }
    }
</script>


<style scoped>
  .shopInfo{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .top{
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .top img{
    width: 45px;
    height: 45px;
  }
  .top .title{
    font-size: 14px;
    padding-left: 10px;
  }
  .shop-middle{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .shop-middle-item{
    flex: 1;
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .info-sells{
    padding: 1px;
  }
  .info-goods{
    padding: 5px;
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }
  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }
  .shop-middle-right table td {
    padding: 5px 0;
  }
  .shop-middle-right .score {
    color: #5ea732;
  }
  .shop-middle-right .score-better {
    color: #f13e3a;
  }
  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }

  .enter-shop-wrap {
    text-align: center;
  }
  .enter-shop {
    display: inline-block;
    background-color: #f2f2f2;
    font-size: 14px;
    border-radius: 100px;
    margin: 10px;
  }
</style>

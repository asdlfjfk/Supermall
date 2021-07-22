<template>
    <div class="goods">
      <goods-listitem v-for="item in goods" :goodsitem="item" :key="item.id"/>
    </div>
</template>

<script>
  import GoodsListitem from '../goods/GoodsListitem'

    export default {
        name: "GoodsList",
        components:{
          GoodsListitem
        },
        props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
.goods{
  display:flex;
  flex-wrap: wrap; /*根据宽度自动决定一行放几个*/
  justify-content: space-around; /*均等分*/

  padding:3px;
}
</style>

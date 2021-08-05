<template>
    <div class="categoryLeft">
      <div class="left_tab_item" v-for="(item,index) in itemList" :key="index" :class="{active: currentIndex === index}" @click="itemClick(index)">
        <p>{{item.title}}</p>
      </div>
    </div>
</template>

<script>
  import { getCategory } from "../../../network/category.js";

    export default {
        name: "categoryLeft",
        data(){
            return {
              itemList:[],
              currentIndex:0,
            }
        },
        created(){
          getCategory().then(res => {
            // console.log(res);
            this.itemList = res.data.data.category.list
            //获取默认值 即正在流行
            this.$bus.$emit('makey',this.itemList[this.currentIndex].maitKey)
          })
        },

        methods:{
          itemClick(Number) {
            this.currentIndex = Number
            this.$bus.$emit('makey',this.itemList[this.currentIndex].maitKey)
          }
        }
    }
</script>

<style scoped>
  .categoryLeft{
    margin-top: 44px;
    width: 25%;
    background-color: #f6f6f6;
  }


  .left_tab_item {
    height: 2rem;
    line-height: 2rem;
  }
  .left_tab_item p {
    width: 100%;
    text-align: center;
    color: rgb(100, 100, 100);
  }


  .left_tab_item.active {
    background-color: white;
  }
  .left_tab_item.active p {
    color: deepskyblue;
    font-weight: 600;
    border-left: 0.2rem solid deepskyblue;
  }


</style>

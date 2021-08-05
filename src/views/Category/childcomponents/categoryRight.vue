<template>
    <div class="categoryRight">
      <bscroll class="content" ref="scroll">
        <div class="tab_item" v-for="(item,index) in listItem" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
            <p class="item_text">{{item.title}}</p>
          </a>
        </div>
      </bscroll>
    </div>
</template>

<script>
  import { getCategoryInfo } from "../../../network/category.js";
  import bscroll from "components/common/better-scroll/BScroll"
    export default {
        name: "categoryRight",
        components:{
          bscroll
        },
        data(){
          return {
            maitKey:'3627',
            listItem:[],
            count: 0
          }
        },
        created(){
          this.$bus.$on('makey',data => {
            this.maitKey = data

            //获取动态的值
            getCategoryInfo(this.maitKey).then(res => {
              //获取到分类栏目点击的对应数据res
              this.listItem = res.data.data.list
            })
          })
        },
      methods:{
        imgLoad() {
          this.count++;
          if (this.count >= this.listItem.length) {
            this.$refs.scroll.refresh();
            this.count = 0;
          }
        }
      }
    }
</script>

<style scoped>
  .categoryRight{
    flex: 1;
    margin-top: 44px;
  }
  .tab_item {
    display: inline-block;
    width: 3.5rem;
    margin: 0.3rem 0.25rem;
  }
  .tab_item a {
    display: block;
  }
  .tab_item img {
    width: 100%;
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
  .item_text {
    margin-top: 0.3rem;
    text-align: center;
  }
</style>

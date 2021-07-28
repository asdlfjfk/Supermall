<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/Detail/back.png" alt="" @click="backClick">
      </div>

      <div slot="center"class="title">
        <!--:class动态绑定class实现变色 currentIndex默认为0-->
        <!--遍历时只有index为0 和 currentIndex相等 即默认下标第一个item变色-->
        <div v-for="(item,index) in titles" class="titleItems" :class="{active: index === currentIndex}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>


    </nav-bar>
  </div>

</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar'
    export default {
        name: "DetailNavBar",
      data(){
        return{
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
        }
      },
      components:{
        NavBar
      },
      methods:{
          //根据传入的index 控制哪个选项变色
        titleClick(index){
          this.currentIndex = index
        },
        backClick(){
          this.$router.back()
          // this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
    vertical-align: middle;
  }

  .titleItems{
    flex: 1;
  }

  .active{
    color: deepskyblue;
  }

  .back img{
    vertical-align: middle;
  }
</style>

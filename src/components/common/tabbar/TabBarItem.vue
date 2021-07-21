<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive" ><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-iconActive"></slot></div>
    <div :style="ActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          link:String,
          activeColor:{
            type:String,
            default:'deepskyblue'
          }
        },
        data(){
          return {
            // isActive: false,
          }
        },
        computed:{
            isActive(){
              //活跃变色    判断当前路由对象路径是否与传进来的路径一致   若一致则！= -1返回true
              //判断当前路由对象是否包含传进来的路径
              return this.$route.path.indexOf(this.link) != -1
            },
            ActiveColor(){
              //活跃则显示更改后的颜色 不活跃则显示默认值
              return this.isActive ? {color:this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
              //跳转
                this.$router.replace(this.link).catch(err => err);
            }
        }
    }
</script>

<style scoped>
  .tab-bar-item {
    text-align: center;
    flex: 1;
    font-size:14px;font-weight:bold;
    padding:4px;
    filter:
      Dropshadow(offx=1,offy=0,color=deepskyblue)
      Dropshadow(offx=0,offy=1,color=deepskyblue)
      Dropshadow(offx=0,offy=-1,color=deepskyblue)
      Dropshadow(offx=-1,offy=0,color=deepskyblue);
    color: #708090;
  }

  .tab-bar-item img{
    margin-top: 3px;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-bottom: 1px;
  }

  .active {
    color: deepskyblue;
  }
</style>

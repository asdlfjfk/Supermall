
<template>
  <!--封装better-scroll-->
    <div ref="wrapper" class="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import bscroll from 'better-scroll'

    export default {
        name: "BScroll",
        props:{
          probe:{
            //0,1 不监听 2监听手指滚动 3监听所有滚动
            type:Number,
            default:0
          },
          pullup:{
            type:Boolean,
            default: false
          }
        },
        data(){
          return {
            scroll:null,
            message:'back-top click!'
          }
        },
        mounted(){

          // this.scroll = new bscroll(document.querySelector('.wrapper'),{})

          //最好通过ref去获取
          //ref如果如果是绑定在组件中 通过this.refs.变量名 获取到组件对象
          //ref如果如果是绑定在元素中 通过this.refs.变量名 获取到元素对象
          this.scroll = new bscroll(this.$refs.wrapper,{
            probeType:this.probe,
            pullUpLoad:this.pullup,
            click:true,
            mouseWheel:true,
          })

          //监听滚动位置
          this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position) //将事件传出去 在BScroll中完成事件不合适
          })

          //监听上拉事件
          this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
          })
        },
        methods:{
            //500为默认值 传参可以修改
          back(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
          },

          finishpullup(){
            this.scroll.finishPullUp()
          }
        }
    }
</script>

<style scoped>

</style>

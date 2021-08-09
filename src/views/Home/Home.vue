<template>
  <div id="home">
    <!--导航栏-->
    <nav-bar id="navhome">
     <div slot="center" align="center" id="main">购物街</div>
    </nav-bar>

    <!--浮动分类栏(吸顶效果)-->
    <tab-control :titles="['流行','新款','精选']"  @tabClick="ControlClick" ref="tabControl1" class="control" v-show="controlshow"/>


    <!--使用封装后的better-scroll-->
    <bscroll class="content" ref="Scroll" :probe="3" @scroll="contentScroll" :pullup="true" @pullingUp="pullup">
        <!--轮播图 :banner获取父组件的banner值传入子组件的banner-->
        <home-carousel :banner="banner" @carouselload="carouselloadimg"/>

        <!--推荐-->
        <home-recommend-view :recommend="recommend" @homereload="homerecommend"/>

        <!--本周流行-->
        <home-feature-view @featureload="featureimgload"/>

        <!--浮动分类栏-->
        <tab-control :titles="['流行','新款','精选']"  @tabClick="ControlClick" ref="tabControl2"/>

        <!--商品页-->
        <goods-list :goods="goods[currentType].list"/>
    </bscroll>

    <!--回到顶部按钮  .native使组件可以监听事件-->
    <back-top @click.native="backTopClick" v-show="isShowBacktop"/>

  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeCarousel from "../Home/childComponents/HomeCarousel"
    import HomeRecommendView from "../Home/childComponents/HomeRecommendView"
    import HomeFeatureView from "../Home/childComponents/HomeFeatureView"
    import TabControl from "components/content/tabControl/TabControl"
    import GoodsList from "components/content/goods/GoodsList"
    import bscroll from "components/common/better-scroll/BScroll"

    import {getHomeMultidata,getHomeGoods} from "../../network/home";

    import {debounce} from "../../common/utils";
    import {backTopMixin} from "../../common/mixin";

    export default {
        name: "Home",
        components: {
          NavBar,
          HomeCarousel,
          HomeRecommendView,
          HomeFeatureView,
          TabControl,
          GoodsList,
          bscroll
        },
        //混入 回到顶部功能
        mixins:[backTopMixin],
        data(){
          return {
            banner:[],
            recommend:[],
            goods:{
              'pop':{page:0, list:[]},
              'new':{page:0, list:[]},
              'sell':{page:0, list:[]}
            },
            currentType:'pop',
            offsetTop:0,
            controlshow:false,
            saveY:0,
          }
        },
        created(){
          //在组件创建时请求首页的数据
          this.mulitidata()

          //请求商品数据
          this.homegoods('pop')
          this.homegoods('new')
          this.homegoods('sell')
        },
        mounted(){
          //起因:每加载一次图片 就执行一次refresh太过频繁
          //方法:定义防抖函数 自定义延迟时间 让图片一起加载完成后再执行refresh
          //若某些图片加载过慢 超过了延迟时间 refresh还是可能执行多次

          //将refresh函数传入debounce函数中生成一个新的经过防抖处理的refresh函数
          const refresh = debounce(this.$refs.Scroll.refresh,100)

          //通过事件总线$bus监听图片加载  加载完成后刷新使better-scroll重新计算加载图片后的高度
          this.$bus.$on('imgload',() => {
            // this.$refs.Scroll.scroll.refresh()
            refresh()
          })

        },
        activated(){
          //读取并回到先前的浏览状态
          this.$refs.Scroll.scroll.scrollTo(0,this.saveY,1)
          this.$refs.Scroll.refresh()
        },
        deactivated(){
          //保存浏览状态
          this.saveY = this.$refs.Scroll.scroll.y
        },
        methods:{
          //事件监听相关
          ControlClick(index){
            switch(index){
              case 0:
                this.currentType = 'pop'
                break;
              case 1:
                this.currentType = 'new'
                break;
              case 2:
                this.currentType = 'sell'
                break;
            }

            //让两个栏目选中属性保持一致
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
          },

          //监听滚动区域
          contentScroll(position){
              //三目运算符 这里先给y值加上负号取证再对比 决定回到顶部图标是否显示
              this.showbacktop(position)

            //决定tabControl是否吸顶
            //若y值超过了offsetTop值 controlshow为true 吸顶显示
            this.controlshow = (-position.y) > this.offsetTop
          },
          //上拉加载
          pullup(){
            this.homegoods(this.currentType)  //当前选中哪个就加载哪个
            //停止上拉加载 因为上拉事件只会执行一次 需要将其停止之后才能触发第二次
            this.$refs.Scroll.finishpullup()
          },

          //网络请求相关
          mulitidata(){
            getHomeMultidata().then(res => {
              this.banner = res.data.data.banner.list
              this.recommend = res.data.data.recommend.list
            }).catch(err => {
              console.log(err);
            })
          },

          //请求商品数据
          homegoods(type){
            //取出当前页码
            const page = this.goods[type].page + 1 //配置页数并传入方法  这里不会改变goods里面的页数是临时变量
            getHomeGoods(type,page).then(res => {
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page += 1
            }).catch(err => {
              console.log(err);
            })

          },

          carouselloadimg(){
            //获取tabControl的offsetTop值
            //所有组件都有一个属性$el用于获取组件中的元素
            this.offsetTop = this.$refs.tabControl2.$el.offsetTop
          },
          homerecommend(){
            this.offsetTop = this.$refs.tabControl2.$el.offsetTop
          },
          featureimgload(){
            this.offsetTop = this.$refs.tabControl2.$el.offsetTop
          },

          backTopClick(){
            this.$refs.Scroll.back(0,0,800)
          },
        }
    }
</script>

<style scoped>
  #home{
    /*使内容不被脱离的导航栏覆盖 腾出44px的空间刚刚好是导航栏的大小*/
    height: 100vh;
    position: relative;
  }

  #main{
    /*设置空心字体*/
    font-size:14px;
    font-weight:bold;
    padding:4px;
    filter:
      Dropshadow(offx=1,offy=0)
      Dropshadow(offx=0,offy=1)
      Dropshadow(offx=0,offy=-1)
      Dropshadow(offx=-1,offy=0);
    color:#fff;
  }

  #navhome{
    background-color: var(--color-tint);

    /*position: fixed; !*使导航栏脱离 上下滚动时不跟着动*!*/
    /*left: 0;*/
    /*right:0;*/
    /*top: 0;*/
    /*z-index:9;*/
  }

  /*scoped表示作用域 只访问.content不会访问BScroll里面的.content*/
  /*.content{*/
    /*position: absolute;*/
    /*top:44px;*/
    /*bottom: 43px;*/
    /*left: 0;*/
    /*right: 0;*/
  /*}*/

  .content{
    height: calc(100% - 44px - 6.5px );
    /*margin-top: 44px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
  }

  .control{
    position: relative;
    z-index: 9;
  }

</style>

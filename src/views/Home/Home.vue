<template>
  <div id="home">

    <!--导航栏-->
    <nav-bar id="navhome">
     <div slot="center" align="center" id="main">购物街</div>
    </nav-bar>

    <!--轮播图 :banner获取父组件的banner值传入子组件的banner-->
    <home-carousel :banner="banner"/>

    <!--推荐-->
    <home-recommend-view :recommend="recommend"/>

    <!--热门推荐-->
    <home-feature-view/>

    <!--浮动分类栏-->
    <tab-control :titles="['流行','新款','精选']" class="tabcontrol" @tabClick="ControlClick"/>

    <!--商品页-->
    <goods-list  :goods="goods[currentType].list"/>

  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import HomeCarousel from "../Home/childComponents/HomeCarousel"
    import HomeRecommendView from "../Home/childComponents/HomeRecommendView"
    import HomeFeatureView from "../Home/childComponents/HomeFeatureView"
    import TabControl from "../../components/content/tabControl/TabControl"
    import GoodsList from "../../components/content/goods/GoodsList"

    import {getHomeMultidata,getHomeGoods} from "../../network/home";

    export default {
        name: "Home",
        components: {
          NavBar,
          HomeCarousel,
          HomeRecommendView,
          HomeFeatureView,
          TabControl,
          GoodsList
        },
        data(){
          return {
            banner:[],
            recommend:[],
            goods:{
              'pop':{page:0, list:[]},
              'new':{page:0, list:[]},
              'sell':{page:0, list:[]}
            },
            currentType:'pop'
          }
        },
        created(){
          //在组件创建时请求首页的数据
          this.mulitidata()

          this.homegoods('pop')
          this.homegoods('new')
          this.homegoods('sell')
          //请求商品数据

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
          },

          //网络请求相关
          mulitidata(){
            getHomeMultidata().then(res => {
              console.log(res);
              this.banner = res.data.data.banner.list
              this.recommend = res.data.data.recommend.list
            })
          },
          homegoods(type){
            const page = this.goods[type].page + 1 //配置页数并传入方法  这里不会改变goods里面的页数是临时变量
            getHomeGoods(type,page).then(res => {
              console.log(res);
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page += 1
            })
          },
        }
    }
</script>

<style scoped>
  #main{
    /*设置空心字体*/
    font-size:14px;font-weight:bold;
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

    position: fixed; /*使导航栏脱离 上下滚动时不跟着动*/
    left: 0;
    right:0;
    top: 0;
    z-index:9; /*使脱离的导航栏显示*/
  }

  #home{
    /*使内容不被脱离的导航栏覆盖 腾出44px的空间刚刚好是导航栏的大小*/
    padding-top: 44px;
  }

  .tabcontrol{
    /*让其滚动到指定位置时脱离*/
    position: sticky;
    top: 44px;
    z-index:1;
  }

</style>

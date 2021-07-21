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
  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import HomeCarousel from "../Home/childComponents/HomeCarousel"
    import HomeRecommendView from "../Home/childComponents/HomeRecommendView"

    import {getHomeMultidata} from "../../network/home";

    export default {
        name: "Home",
        components: {
          NavBar,
          HomeCarousel,
          HomeRecommendView
        },
        data(){
          return {
            banner:[],
            recommend:[]
          }
        },
        created(){
          //在组件创建时请求首页的所有数据
          getHomeMultidata().then(res => {
            console.log(res);
            this.banner = res.data.data.banner.list
            this.recommend = res.data.data.recommend.list
          })
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
  }


</style>

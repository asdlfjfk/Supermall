<template>
    <div id="detail">
      <!--详情页导航栏-->
      <detail-nav-bar class="detail-nav" @titleclick="titleclick" ref="nav"/>

      <!--scroll 必须有固定的高度 通过class="content"设置-->
      <scroll class="content" ref="bscroll" @scroll="contentscroll" :probe="3">
        <div>
          <!--详情页轮播图-->
          <detail-carousel :top-images="TopImages" @imgload="detailimgLoad" class="carousel"/>

          <!--商品名称以及价格-->
          <detail-base-info :goods="goodsContent" ref="goodsdesc"/>

          <!--商家信息-->
          <detail-shop-info :shop-info="shopContent"/>

          <!--商品详情-->
          <detail-goods-info :goods-info="detailInfo" @detailImageLoad="refresh"/>

          <!--商品参数-->
          <detail-param-info :paramInfo="goodsParams" ref="goodsparams" class="params"/>

          <!--评论信息-->
          <detail-comment-info :commentInfo="comment" ref="comment" class="comments"/>

          <!--推荐-->
          <goods-list :goods="recommends" class="recommend" ref="recommend"/>

        </div>
      </scroll>

    </div>
</template>

<script>
  import DetailNavBar from './childComponents/DetailNavBar'
  import DetailCarousel from './childComponents/DetailCarousel'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
  import DetailParamInfo from './childComponents/DetailParamInfo'
  import DetailCommentInfo from './childComponents/DetailCommentInfo'
  import GoodsList from '../../components/content/goods/GoodsList'

  import Scroll from '../../components/common/better-scroll/BScroll'

  import {getDetail,goodsinfo,shopinfo,goodsparams,getRecommend} from '../../network/detail'
  import {debounce} from "../../common/utils";

    export default {
        name: "Detail",
        data(){
          return{
            iid:null,
            TopImages:[],
            goodsContent:{},
            shopContent:{},
            detailInfo:{},
            goodsParams:{},
            comment:{},
            recommends:[],
            load:[false,false,false],
            themeTop:[],
            getthemeTopY:null,
            currentIndex:0
          }
        },
        components:{
          DetailNavBar,
          DetailCarousel,
          DetailBaseInfo,
          DetailShopInfo,
          DetailGoodsInfo,
          DetailParamInfo,
          DetailCommentInfo,
          GoodsList,
          Scroll,
        },
        created(){
          //1.获取传过来商品的iid参数并保存
          this.iid = this.$route.params.id

          //2.根据iid请求详情数据
          getDetail(this.iid).then(res => {
            console.log(res);
            const data = res.data.result
            //1.获取顶部轮播图数据
            this.TopImages = data.itemInfo.topImages
            //2.获取商品信息
            this.goodsContent = new goodsinfo(data.itemInfo,data.columns,data.shopInfo.services)
            //3.获取商家信息
            this.shopContent = new shopinfo(data.shopInfo)
            //4.获取商品详情以及图片
            this.detailInfo = data.detailInfo
            //5.获取商品参数
            this.goodsParams = new goodsparams(data.itemParams.info,data.itemParams.rule)
            //6.获取评论信息(评论信息可能为空)
            if (data.rate.cRate !== 0){
              this.comment = data.rate.list[0]
            }

          })
          //7.获取推荐信息
          getRecommend().then(res => {
            this.recommends = res.data.data.list
            console.log(res.data.data.list);
          })

          this.getthemeTopY = debounce(() => {
            this.themeTop = [] //重置
            this.themeTop.push(0);
            this.themeTop.push(this.$refs.goodsparams.$el.offsetTop)
            this.themeTop.push(this.$refs.comment.$el.offsetTop)
            this.themeTop.push(this.$refs.recommend.$el.offsetTop)
            console.log(this.themeTop);
          })

        },
        mounted(){
          let newRefresh = debounce(this.$refs.bscroll.refresh,100)
          //推荐商品图片加载完成
          this.$bus.$on('imgload2',()=>{
            newRefresh()
            this.load[2] = true
          })
        },
        methods:{
          refresh(){ //轮播图加载完成
            this.$refs.bscroll.refresh()
            this.load[0] = true

            this.getthemeTopY()
          },
          detailimgLoad(){  //详情图加载完成
            this.$refs.bscroll.refresh()
            this.load[1] = true

            this.getthemeTopY()
          },
          //商品详详情分类栏点击滚动到指定位置
          titleclick(index){
              if(this.load[0] && this.load[1] && this.load[2]){  //当图片加载完成后再跳转至对应位置
                switch (index) {
                  case 0:
                    // this.$refs.bscroll.back(0,0,1000) 也可以直接通过back(0,0,1000回到顶部)
                    this.$refs.bscroll.scroll.scrollToElement(document.querySelector(".carousel"),800,0)
                    break;
                  case 1:
                    this.$refs.bscroll.scroll.scrollToElement(document.querySelector(".params"),800,0)
                    break;
                  case 2:
                    this.$refs.bscroll.scroll.scrollToElement(document.querySelector(".comments"),800,0)
                    break;
                  case 3:
                    this.$refs.bscroll.scroll.scrollToElement(document.querySelector(".recommend"),800,0)
                    break;
                }
              }
            },
          //监听滚动位置
          contentscroll(position){
            const positionY = -position.y  //当前滚动位置
            //根据滚动位置 分类栏实时更新

            if  (positionY >= this.themeTop[0] && positionY < this.themeTop[1]) {
              if (this.currentIndex != 0){
                this.currentIndex = 0
                this.$refs.nav.currentIndex = this.currentIndex
              }
            }
            //若评论为空
            else if (this.themeTop[2] === undefined) {
              if (positionY >= this.themeTop[1] && positionY < this.themeTop[3]) {
                if (this.currentIndex != 1){
                  this.currentIndex = 1
                  this.$refs.nav.currentIndex = this.currentIndex
                }
              }
            }
            //若评论不为空
            else if (this.themeTop[2] !== undefined){
              if (positionY >= this.themeTop[1] && positionY < this.themeTop[2]) {
                if (this.currentIndex != 1){
                  this.currentIndex = 1
                  this.$refs.nav.currentIndex = this.currentIndex
                }
              }
              if (positionY >= this.themeTop[2] && positionY < this.themeTop[3]) {
                if (this.currentIndex != 2){
                  this.currentIndex = 2
                  this.$refs.nav.currentIndex = this.currentIndex
                }
              }
            }
            if( positionY >= this.themeTop[3]){
              if (this.currentIndex != 3){
                this.currentIndex = 3
                this.$refs.nav.currentIndex = this.currentIndex
              }
            }
          }
        },
    }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 12;
    background-color: #fff;

    height: 100vh;
  }

  .content{
    height: calc(100% - 44px);
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

</style>

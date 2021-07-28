<template>
    <div id="detail">
      <!--详情页导航栏-->
      <detail-nav-bar class="detail-nav"/>

      <!--scroll 必须有固定的高度 通过class="content"设置-->
      <scroll class="content" ref="bscroll">
        <div>
        <!--详情页轮播图-->
        <detail-carousel :top-images="TopImages"/>

        <!--商品名称以及价格-->
        <detail-base-info :goods="goodsContent"/>

        <!--商家信息-->
        <detail-shop-info :shop-info="shopContent"/>

        <!--商品详情-->
        <detail-goods-info :goods-info="detailInfo" @detailImageLoad="refresh"/>

        <!--商品参数-->
        <detail-param-info :paramInfo="goodsParams"/>

        <!--评论信息-->
        <detail-comment-info :commentInfo="comment"/>

        <!--推荐-->
        <goods-list :goods="recommends"/>

          <div align="center" class="bottom">~ 已经到底啦 ~</div>
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
            recommends:[]
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
          Scroll
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
            //6.获取评论信息
            this.comment = data.rate.list[0]
          })
          //7.获取推荐信息
          getRecommend().then(res => {
            this.recommends = res.data.data.list
            console.log(res.data.data.list);
          })
        },
        mounted(){
          let newRefresh = debounce(this.$refs.bscroll.refresh,100)
          this.$bus.$on('imgload2',()=>{
            newRefresh()
          })
        },
        methods:{
          refresh(){
            this.$refs.bscroll.refresh()
          }
        }
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

  .bottom{
    margin-top: -30px;
  }
</style>

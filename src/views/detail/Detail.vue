<template>
  <div class="detail">
  <detail-nav-bar @itemclick='navclick' class="nav-bar" ref="nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" @scroll="scroll" :probeType='3'>
      <detail-swiper :Swiper='topImage'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
      <detail-param-info ref="param" :paramInfo='paramInfo'></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo='commentInfo1'></detail-comment-info>
      <good-list ref="tuicomment" :goods='tuicomment'></good-list>
  </scroll>
      <detail-bottom-bar @addToCart='addCart'></detail-bottom-bar>
      <back-top v-show="isShow" @click.native="backclick"></back-top>
  </div>

</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
import DetailSwiper from './childCom/DetailSwiper'
import DetailBaseInfo from './childCom/DetailBaseInfo'
import DetailShopInfo from './childCom/DetailShopInfo'
import DetailGoodsInfo from './childCom/DetailGoodsInfo'
import DetailParamInfo from './childCom/DetailParamInfo'
import DetailCommentInfo from './childCom/DetailCommentInfo'
import DetailBottomBar from './childCom/DetailBottomBar'

import scroll from 'components/common/scroll/BScroll'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getCommend,debounce} from 'network/detail'
import {itemListenerMixin} from 'common/mixin.js'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    scroll,
    GoodList,
    BackTop
  },
  mixins:[itemListenerMixin],
  props:{},
  data(){
    return {
      iid:null,
      topImage:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo1:{},
      tuicomment:[],
      theemtitle:[],
      theemtitles:null,
      currentY:0,
      currentIndex:0,
      isShow:false
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result
      // console.log(res)
      // 获取顶部轮播图数据
      this.topImage = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      // 获取店铺信息对象
      this.shop = new Shop(data.shopInfo)
      // 获取详情页信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // 获取评论信息
      if(data.rate.cRte !== 0){
        this.commentInfo1 = data.rate.list[0]
      }
      this.$nextTick(() => {

      })
    }),
    getCommend().then(res => {
      // console.log(res);
      this.tuicomment = res.data.list
      // console.log(this.tuicomment)
    })
    // 封装一层防抖操作
    this.theemtitles = debounce(() => {
        let theemtitle = []
        this.theemtitle.push(0)
        this.theemtitle.push(this.$refs.param.$el.offsetTop)
        this.theemtitle.push(this.$refs.comment.$el.offsetTop)
        this.theemtitle.push(this.$refs.tuicomment.$el.offsetTop)
        this.theemtitle.push(Number.MAX_VALUE)
        // console.log(this.theemtitle)
    })
  },
  methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
        this.theemtitles()
      },
      navclick(index) {
        this.$refs.scroll.scrollTo(0,-this.theemtitle[index],500)
      },
      scroll(position) {
        this.currentY = -position.y;
        let length = this.theemtitle.length;
        for(let i =0;i < length - 1;i++) {
                  if(this.currentIndex !== i && (this.currentY > this.theemtitle[i] && this.currentY < this.theemtitle[i+1])){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
        }
        this.isShow = (-position.y) > 500
      },
      backclick(){
        this.$refs.scroll.scrollTo(0,0,500);
    },
    addCart() {
      const product = {};
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.image = this.topImage[0];
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.commit('addCart',product)
      console.log(this.$store.state.cartLish)
    }
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
}
</script>
<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.nav-bar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px);
}
</style>
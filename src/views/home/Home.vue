<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll" @pullingUp='loadMore'>
        <home-swiper class="home-swiper" :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control @tabcontrol="control" class="tab-control" :title="['流行','新款','精选']"></tab-control>
        <good-list :goods="getcurrentType()"></good-list>
    </scroll>
    <back-top v-show="isShow" @click.native="backclick"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backTop/BackTop"

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 导入专门为home设计的网络请求
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import Scroll from "components/common/scroll/BScroll";
export default {
  components: {
    NavBar,
    TabControl,
    GoodList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll
  },
  props: {},
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow:false
    };
  },
  created() {
    // 1.请求多个数据
    // 由于返回的instance是一个promise可以直接使用then
    this.getHomeMultidata(), 
    this.getHomeGoods("pop"),
    this.getHomeGoods("new"),
    this.getHomeGoods("sell")
  },
  methods: {
    // 事件监听相关
    control(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    getcurrentType() {
      return this.goods[this.currentType].list;
    },
    contentScroll(position) {
      this.isShow = (-position.y) > 500
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh()
    },
    backclick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // 网络请求相关的
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result = res
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type, page) {
      getHomeGoods(type, 1).then(res => {
        const page = this.goods[type].page + 1;
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    }

  }
  // 在网页创建时就开始调用
};
</script>
<style scoped>
#home{
  height: 100vh;
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

.tab-control {
  z-index: 9;
}
.content {
  /*  通过计算属性
  height: calc(100% - 93px);
  overflow:hidden;
  margin-top: 44px;*/

    position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
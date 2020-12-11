<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
            <tab-control @tabcontrol="control" :title="['流行','新款','精选']" ref="tabcontrol2" class="tabcontrol" v-show="controlShow"></tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probe-type='3' 
            @scroll="contentScroll" 
            :pullingUp='true'
            @pullingUp='LoadMore'>
        <home-swiper class="home-swiper" :banners="banners" @imageLoad='swiperImageLoad'></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control @tabcontrol="control" :title="['流行','新款','精选']" ref="tabcontrol1"></tab-control>
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
import {debounce} from '@/common/utils'
import {itemListenerMixin} from 'common/mixin'
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
  mixins:[itemListenerMixin],
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
      isShow:false,
      tabOffsetTop:0,
      controlShow:false,
      scrollY:0
    };
  },
  created() {
    // 1.请求多个数据
    // 由于返回的instance是一个promise可以直接使用then
    this.getHomeMultidata(), 
    this.getHomeGoods("pop"),
    this.getHomeGoods("new"),
    this.getHomeGoods("sell")

    // console.log(this.goods)
  },
  destroyed() {
    console.log('销毁了')
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
  },
  methods: {
    // 事件监听相关

    // 根据点击哪个事项 控制当前的类别
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
      };
      this.$refs.tabcontrol2.currentIndex = index;
      this.$refs.tabcontrol1.currentIndex = index;
    },
    // 获取当前的类别
    getcurrentType() {
      return this.goods[this.currentType].list;
    },
    // 获取滚动的高度 用来控制isShow是否为true
    contentScroll(position) {
      this.isShow = (-position.y) > 500
      this.controlShow = -position.y > this.tabOffsetTop 
    },
    // 加载更多
    LoadMore() {
      this.getHomeGoods(this.currentType)
    },
    // 回到顶部的点击
    backclick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol1.$el.offsetTop
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
    getHomeGoods(type) {
        const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
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
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

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
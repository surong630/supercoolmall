<template>
<div>
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper class="home-swiper" :banners ="banners"></home-swiper>
  <recommend-view :recommends='recommends'></recommend-view>
  <feature-view></feature-view>
  <tab-control @tabcontrol='control' class="tab-control" :title="['流行','新款','精选']"></tab-control>
  <good-list :goods="getcurrentType()"></good-list>
  <ul>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
    <li>内容</li>
  </ul>
</div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from'components/content/goods/GoodList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


// 导入专门为home设计的网络请求
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
export default {
  components:{
    NavBar,
    TabControl,
    GoodList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  props:{},
  data(){
    return {
      result:null,
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop'
    }
  },
    created() {
    // 1.请求多个数据
    // 由于返回的instance是一个promise可以直接使用then
    this.getHomeMultidata(),
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 事件监听相关
    control(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
      }
    },
    getcurrentType(){
      return this.goods[this.currentType].list
    },
    // 网络请求相关的
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      // this.result = res
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type,page){
      getHomeGoods(type,1).then(res => {
      const page = this.goods[type].page +1;
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page +=1
    })
    }

  },
  // 在网页创建时就开始调用


}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.home-swiper{
  padding-top: 44px;
}
.tab-control{
  z-index: 9;
}
</style>
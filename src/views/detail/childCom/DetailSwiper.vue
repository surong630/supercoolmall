<template>
  <div class="detail-swiper">
    <swiper class="swiper1">
      <swiper-item v-for="item in Swiper">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    Swiper:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.swiper1{
  height: 300px;
}
</style>
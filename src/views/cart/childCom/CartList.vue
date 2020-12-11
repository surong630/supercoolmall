<template>
  <div class="cartlist">
  <Scroll class="content" ref="scroll">
      <cart-list-item v-for="item in $store.state.cartLish" :itemInfo='item'></cart-list-item>
  </Scroll>
  </div>
  
</template>

<script>
import Scroll from 'components/common/scroll/BScroll'
import CartListItem from './CartListItem'
export default {
  components:{
    Scroll,
    CartListItem,
  },
  props:{},
  data(){
    return {
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
.cartlist{
  height: 100vh;
}
.content{
  height: calc(100vh - 93px - 40px);
  overflow: hidden;
}
</style>
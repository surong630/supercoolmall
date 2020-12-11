<template>
  <div class="topcart">
    <nav-bar class="cart">
      <div slot="center">购物车({{carlength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childCom/CartList'
import CartBottom from './childCom/CartBottom'
export default {
  components:{
    NavBar,
    CartList,
    CartBottom
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    carlength() {
      return this.$store.state.cartLish.length
    }
  }
}
</script>
<style scoped>
.cart{
  background-color: var(--color-tint);
  color: #fff;
}
.topcart{
  height: 100vh;
}

</style>
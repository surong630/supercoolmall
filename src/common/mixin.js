import {debounce} from './utils'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted() {
    let fresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgListener = () => {
      fresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
    // console.log('我是混入')
  },
}


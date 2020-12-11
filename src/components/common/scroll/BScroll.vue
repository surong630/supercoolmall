<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components:{},
  props:{
    probeType:{
      type:Number,
      default: 0
    },
    pullingUp:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrap,{
      click: true,
      probeType:this.probeType,
      pullUpLoad:this.pullingUp
    })
    if(this.probeType ===2 || this.probeType ===3) {
      this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    }
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
    })



    //onsole.log(this.scroll)
  },
  methods: {
    scrollTo(x,y,time=500){
     this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      // console.log('----')
     this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll? this.scroll.y : 0
    }
  },
}
</script>
<style scoped>

</style>
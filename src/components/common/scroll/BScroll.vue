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
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
}
</script>
<style scoped>

</style>
<template>
    <div  class="wrapper">
       <ul>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
    <li>我是</li>
  
    </ul>
    </div>
   
    
    

</template>

<script>
import BScroll from 'better-scroll'
export default {
  components:{
  },
  props:{},
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('pullingUp',() =>{
      console.log('上拉加载')
    })
    this.scroll.on('scroll',(position) => {
      console.log(position)
    })
  },
}
</script>
<style scoped>
.wrapper{
  background-color: red;
  height: 150px;
  overflow: hidden;
}
</style>
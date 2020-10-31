<template>
  <div class="tab-bar-item" @click='itemclick'>
    <div v-if="!isActive"><slot name="icon-img"></slot></div>
    <div v-else><slot name="icon-imgactive"></slot></div>
    <div :style="isStyle"><slot name="icon-text"></slot></div>
  </div>
</template>

<script>
export default {
  components:{
  },
  props:{
    path:String,
    activeStyle:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
    }
  },
  methods: {
    itemclick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    isStyle(){
      return this.isActive ? {color:this.activeStyle} : {}
    }
  }
}
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: #EA986C;
  }
</style>
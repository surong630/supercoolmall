<template>
  <div class="check" :class="{active:isActive}" > 
    <img  src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      
    }
  },
}
</script>
<style scoped>
.check{
  border-radius: 50%;
  border: 2px solid #aaa;

}
.active {
  background-color: red;
  border-color: red;
}
</style>
<template>
  <div class="tab-control">
    <div class="control-item"  v-for="(item,index) in title"    @click='control(index)' :class="{active:index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
   methods: {
     control(index){
       this.currentIndex = index;
       this.$emit('tabcontrol',index)
     }
   },
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.control-item{
  flex: 1;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  
}

.active{
  color: var(--color-tint);

}
.active span{
  border-bottom: 3px solid var(--color-high-text);

}
</style>
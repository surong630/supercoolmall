<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    recommends:{
      type:Array,
      default:[]
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.recommend{
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom: 8px solid #EEEEEE;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>
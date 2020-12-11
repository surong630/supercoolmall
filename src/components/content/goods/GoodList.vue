<template>
  <div>
    <div class="goodlist">
          <good-list-item v-for="item in goods" :goodsItem ='item' class="good-list-item"></good-list-item>
    </div>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  components:{
    GoodListItem
  },
  props:{
    goods:{
      type:Array,
      defautl() {
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  created() {
    // console.log(this.goods)
  },
}
</script>
<style scoped>
.goodlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;

}
.good-list-item{
  width: 48%;
}
</style>
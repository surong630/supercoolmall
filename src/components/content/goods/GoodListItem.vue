<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsinfo">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
    </div>

  </div>
</template>

<script>
export default {
  components:{},
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.goods-item{
  position: relative;
  padding-bottom: 40px;
}
.goods-item img{
  width: 100%;
  border-radius: 5px ;
}
.goodsinfo{
  position: absolute;
  font-size: 12px;
  overflow: hidden;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}
.goodsinfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 .goodsinfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
.collect{
  position: relative;
}
.collect::before{
     content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
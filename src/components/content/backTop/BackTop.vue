<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.backtop{
  position: fixed;
  right: 20px;
  bottom: 60px;
}
.backtop img{
  width: 42px;
  height: 42px;
}
</style>
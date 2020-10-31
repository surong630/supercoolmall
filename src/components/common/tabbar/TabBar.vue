<template>
    <div id="tab-bar">
      <slot></slot>
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
 #tab-bar{
    display: flex;
    background-color: #F5F5F5;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
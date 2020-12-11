<template>
  <nav-bar>
    <div slot="left" @click="backclick">
      <img src="~assets/img/common/back.svg" alt="" class="backimg">
    </div>
    <div class="detailnav" slot="center">
      <div class="nav-item" v-for="(item,index) in titles" :class="{active:index === currentIndex}" @click="itemclick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit('itemclick',index)
    },
    backclick() {
      this.$router.go(-1)
    }
  },
};
</script>
<style scoped>
.detailnav {
  display: flex;
}
.nav-item {
  flex: 1;
}
.active{
  color: var(--color-tint);
}
.backimg{
  margin-top: 12px;
}
</style>
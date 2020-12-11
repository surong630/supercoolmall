<template>
  <div class="bottom">
    <div class="check">
      <check-button @click.native='checkclick' :isActive='isSelect' class="allcheck"></check-button>
    </div>
      <span>全选</span>
      <div class="total">
        合计:{{total}}
      </div>
    </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'
export default {
  components:{
    checkButton
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    total() {
      return this.$store.state.cartLish.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    isSelect() {
      if(this.$store.state.cartLish.length === 0) return false
      return !(this.$store.state.cartLish.filter(item => !item.checked).length)
    }
  },
  activated() {
  },
  methods:{
    checkclick() {
      if(this.isSelect) {
        this.$store.state.cartLish.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartLish.forEach(item => item.checked = true)
      }
    }
  }
}
</script>
<style scoped>
.bottom{
  height: 40px;
  position: relative;
  bottom: 130px;
  display: flex;
  align-items: center;
}
.imgnav{
  display: flex;
  align-items: center;

}
.img{
  border: 2px solid blue;
  border-radius: 50%;
}
.check{
  width: 20px;
  height: 20px;
  margin-left: 10px;
  display: flex;
  margin-right: 20px;
}
.total{
  margin-left: 50px;
}
</style>
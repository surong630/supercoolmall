import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    cartLish:[]
  },
  mutations:{
    addCart(state,payload) {
      let oldProduct = state.cartLish.find(function(item) {
        return item.iid === payload.iid
      })
      if(oldProduct) {
        oldProduct.count +=1
      }else{
        payload.count = 1;
        payload.checked = true;
        state.cartLish.push(payload)
      }
    }

  }
})
export default store
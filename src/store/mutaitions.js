import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-tpyes'
export default {
        // payload新添加的商品
      // let oldProduct = null;
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // 查找之前数组中是否有该商品
      [ADD_COUNTER](state,payload) {
        payload.count++
      },
      [ADD_TO_CART](state,payload) {
        payload.checked = true
        state.cartList.push(payload)
      }
}
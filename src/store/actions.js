import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-tpyes'
export default {
  addCart(context,payload){

    let oldProduct = context.state.cartList.find(function (item) {
      return item.iid ===payload.iid
    })
    // 判断oldProduct
    if(oldProduct) {
      context.commit(ADD_COUNTER,oldProduct)
    }else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
    }
  }
}
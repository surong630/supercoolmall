import {request} from './request'

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getCommend() {
  return request({
    url:'/recommend'
  })
}
export function debounce(func, delay) {
  // 初始化事件
  let timer = null;
  // 返回一个函数 ...args可以传入多个参数
  return function(...args) {
    // 有事件的话就要把时间清除
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice 
  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
export class GoodsParam {
  constructor(info,rule) {
    this.image = info.images ? info.image[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
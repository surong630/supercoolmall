// 防抖动
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
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};
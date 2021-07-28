//防抖函数
export function debounce(func,delay){
  let timer = null
  //...args用于接收传进来函数的n个参数
  return function (...args) {
    //timer不为空执行 清除上一次的timer值
    if (timer) clearTimeout(timer)

    //timer为空执行
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

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

//将date格式化输出  参数:(服务器返回的时间戳,输出的时间格式)  例如fmt.format(date,'yyyy-MM-dd hh:mm:ss')
export function formatDate(date, fmt) {
  //获取年份
  //使用正则表达式获取y的个数 yy - 21  yyyy - 2021
  // y+表示匹配1个或多个y
  // y*表示零个或者多个y
  // y?表示0个或者1个y
  // RegExp.$1 匹配出来的y的个数
  // date.getFullYear() + ''获取字符串形式的年份
  // substr:截取字符串 例如传进来一个y 4-1=3 截取掉3位 只显示1位
  if (/(y+)/.test(fmt)) {  //匹配传过来的字符串
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  //获取月 日 时 分 秒
  let o = {
    'M+': date.getMonth() + 1,  //由于M从0开始所以加1
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

//将时间保证以最低两位的格式显示 未经过该函数: 4:4:4 经过该函数: 04:04:04
//str=4
//'00' + '4' = '004'
//此时str.length = 1 截取1位
//结果'04'
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

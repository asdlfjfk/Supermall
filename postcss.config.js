module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗宽度 对应设计稿的宽度
      viewportHeight: 667,  //视窗高度 对应设计稿的高度
      unitPrecision: 5,//小数点后几位
      viewportUnit: 'vw',//转成的单位
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//不需要转换的类
      minPixelValue: 1,//小于或等于1px的不转换成视窗单位
      mediaQuery: false,
      exclude:[/TabBar/]
    }
  }
}
//正则表达式的一些规则:
//1. ^abc 表示匹配以abc开头的
//2. abc$ 表示匹配以abc结尾的

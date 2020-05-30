module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 32,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
        propList: ['*'],
        selectorBlackList:['.van-']//将vant UI 框架的样式忽略
      }
    }
  }
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',

    //postcss-pxtorem 配置
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 32, // 换算的基数
                        propList: ['*'],
                        selectorBlackList:['.van-']//将vant UI 框架的样式忽略

                    }),
                ]
            }
        }
    },

    //路径配置
    chainWebpack: (config) => {

        config.plugins.delete('prefetch')
        //移除prefetch
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
        config.entry = ["babel-polyfill", "src/main.js"];
    },
}
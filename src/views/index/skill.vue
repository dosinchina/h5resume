<template>
  <div class="skill">
      <p>我能做些什么 <br>(均有实战经验与线上项目)</p>
      <div class="skill_list">
        <p>基础：html(html5),css(css3),javascript,ajax<br>,jsonp . 精准还原设计稿.能用原生处理兼容</p>
        <p>常用框架：vue全家桶<img :src="require('assets/images/vue.png')" alt="">+webpack<img :src="require('assets/images/webpack.png')" alt=""></p>
        <p>常用ui框架：vant,iview,layer,ant-design-vue,ant-design-vue-pro(管理后台)</p>
        <p>关于微信：熟练使用小程序与微信H5相关常用框架与api</p>
        <p>补充：打包体积优化，组件二次封装，些许canvas(分享海报绘制与canvas2d动效)，用过多种IM与地图API，能独立完成整个项目前端所有工作</p>
        <p class="half">代码托管：gitLab</p>
        <p class="half">css预处理：Less</p>
        <p>常用编辑器：vscode</p>
        <p>其他：ps能自己处理素材，审美尚可(如此简历)。沟通与需求理解能力nice，能辅助优化用户体验，心态nice</p>
        <p style="clear: both;"></p>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "skill",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.skill {
  width: 100%;
  text-align: center;
}
.skill_list {
  width: 100%;
  padding: 60px 40px;
  box-sizing: border-box;
  p {
    font-size: 30px;
    padding-bottom: 20px;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    img{
      margin: 0 10px;
      display: inline-block;
    }
    // text-indent: 30px;
  }
  .half {
    width: 50%;
    float: left;
  }
}
</style>

<template>
  <div class="myhead pub_flex_col">
    <div class="headimgurl">
      <van-image
        round
        fit="cover"
        width="6rem"
        height="6rem"
        :src="require('assets/images/headimgurl.jpg')"
      />
    </div>
    <div class="my_msg pub_flex_col">
      <p>我叫杜升，前端工程师，发际线很高那种 :)</p>
      <div class="thinline"></div>
      <img :src="require('assets/images/wechat.png')" alt="">
      <img :src="require('assets/images/qq.png')" alt="">
      <img :src="require('assets/images/email.png')" alt="">
      <img :src="require('assets/images/tel.png')" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from "vue";
import { Image as VanImage } from "vant";
Vue.use(VanImage);
export default {
  name: "index",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.myhead {
  padding-top: 8rem;
  .headimgurl{
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #fff;
  }
  .my_msg{
    width: 100%;
    box-sizing: border-box;
    padding: 100px 30px;
    .thinline{
      width: 100%;
      height: 1px;
      background: #fff;
    }
  }
  p{
    color: #fff;
    font-size: 28px;
    padding-bottom: 30px;
  }
}
</style>

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
      <!-- <p>我叫杜升，前端工程师，发际线很高那种 :)</p> -->
      <p>大家好,我是从业时常两年半的前端工程师,杜升 <br> 发际线很高的那种 :)</p>
      <div class="thinline"></div>
      <div class="msgbox">
        <p class="half">姓名：杜升</p><p class="half">经验：两年半</p>
        <p class="half">年龄：23</p><p class="half">户籍：重庆丰都</p>
        <p class="half">生日：1997-1-8</p><p class="half">-</p>
        <p>院校：重庆工商职业学院(移动互联网专业)</p>
        <p>现住址：重庆市渝北区龙华大道</p>
        <p>联系方式：戳下面的图标都能联系到我哦↓</p>
        <p style="clear: both;"></p>
      </div>
      <div class="contact pub_flex_sb">
        <img :src="require('assets/images/wechat.png')" alt="" @click="()=> {wechatQrcodeShow = true}">
        <img :src="require('assets/images/qq.png')" alt="" @click="()=> {qqQrcodeShow = true}">
        <img :src="require('assets/images/mail.png')" alt="" @click="()=> {mailShow = true}">
        <img :src="require('assets/images/phone.png')" alt="" @click="callPhone">
      </div>
      <!-- <img :src="require('assets/images/tel.png')" alt=""> -->
    </div>

    
  <van-popup  v-model="wechatQrcodeShow">
    <div class="wechat_popup">
      <van-image
        fit="cover"
        width="15rem"
        height="15rem"
        :src="require('assets/images/wechat_qrcode.jpg')"
      />
      <p>可长按识别添加</p>
    </div>
  </van-popup>
  
  <van-popup  v-model="qqQrcodeShow">
    <div class="wechat_popup">
      <van-image
        fit="cover"
        width="15rem"
        height="20rem"
        :src="require('assets/images/qq_qrcode.jpg')"
      />
    </div>
  </van-popup>

  <van-popup  v-model="mailShow">
    <div class="wechat_popup">
      <div class="pub_flex_sb" style="width:15rem">
        <p id="textBox">582200563@qq.com</p>
      </div>
    </div>
  </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from "vue";
import { Image as VanImage, Popup , Icon } from "vant";
Vue.use(Icon);
Vue.use(Popup);
Vue.use(VanImage);
export default {
  name: "index",
  data() {
    return {
      wechatQrcodeShow: false,
      qqQrcodeShow: false,
      mailShow:false
    };
  },
  components: {},
  mounted() {},
  methods: {
    //拨打电话
    callPhone(){
      window.location.href="tel:17784242377"
    },
  }
};
</script>
<style lang="less" scoped>
.myhead {
  // padding-top: 8rem;
  width: 100%;
  .headimgurl {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #fff;
  }
  .my_msg {
    width: 100%;
    box-sizing: border-box;
    padding: 60px 40px;
    text-align: center;
    p {
      color: #fff;
      font-size: 28px;
      line-height: 48px;
    }
  }
  .msgbox {
    width: 100%;
    min-height: 250px;
    border-radius: 20px;
    border: 1px solid #fff;
    margin-top: 60px;
    box-sizing: border-box;
    padding: 20px 30px;
    p{
      text-align: left;
      width: 100%;
    }
    .half{
      width: 50%;
      float: left;
    }
  }
  .contact {
    width: 100%;
    padding: 40px 80px;
    box-sizing: border-box;
    img {
      width: 60px;
    }
  }
  .wechat_popup {
    padding: 30px;
    p {
      font-size: 30px;
      text-align: center;
      line-height: 60px;
      flex-shrink: 0;
      color: #333;
    }
  }
}
</style>
<style lang="less">
.myhead {
  .van-popup {
    border-radius: 20px;
  }
}
</style>

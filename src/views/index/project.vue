<template>

  <div class="project">
      <transition name="van-fade">
        <p v-show="!hideOther && !showingObject.name">我做过什么(近期)</p>
      </transition>
      <div class="project_list">
          <transition name="van-fade"  v-for="(item, index) in projectList" :key="index">
            <div class="project_item pub_flex_sb" v-show="(showingObject.name == item.name || !showingObject.name ) && !hideOther">
                <div class="item_msg left_msg" v-if="index%2==0">
                    <p class="name">{{item.name}}</p>
                    <p class="desc" v-html="item.desc"></p>
                </div>
                <div class="left_img pub_flex_center">
                    <img :src="item.icon" alt="">
                    <!-- <van-image
                        fit="cover"
                        width="2.4rem"
                        height="2.4rem"
                        :src="item.icon"
                    /> -->
                    <van-button color="#99CCCC" plain round size="small" style="margin-top:10px;" v-show="!showingObject.name" @click="projectDetail(item)">项目详情</van-button>
                    <van-button color="#99CCCC" plain round size="small" style="margin-top:10px;" v-show="showingObject.name" @click="viewObject(item)">项目预览</van-button>
                </div>
                <div class="item_msg right_msg" v-if="index%2==1">
                    <p class="name">{{item.name}}</p>
                    <p class="desc" v-html="item.desc"></p>
                </div>
            </div>
          </transition>
          <transition name="van-fade">
            <div class="detail" v-show="showingObject.name && !hideOther">
              <p v-for="(item, index) in showingObject.detail" :key="index"><van-icon name="arrow" />{{item}}</p>
              <van-button color="#99CCCC" plain round size="small" style="margin-top:10px;" @click="showAll">返回列表</van-button>
            </div>
          </transition>
      </div>
      <!-- <van-popup v-model="showDetail" class="detail_popup">{{showingObject}}</van-popup> -->
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from "vue";
import { Swipe, SwipeItem, Image as VanImage, Button, Popup, Icon } from "vant";
import { ImagePreview } from "vant";
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Popup);

export default {
  name: "project",
  data() {
    return {
      // showDetail:false,
      showingObject: {},
      hideOther: false,
      projectList: [
        {
          icon: require("assets/images/8g7.png"),
          name: "八个七匠优优快修服务平台",
          desc:
            "用户端小程序功能涵盖开锁换锁等家政服务线上预约、相关设备线上购买、分销等。<br>商家技师端功能涵盖抢单接单与订单跟踪、收费、汇报、统计等",
          detail: [
            "独立完成用户端，商家技师端前端所有工作",
            "原生微信小程序开发，用到部分vant-weapp组件",
            "常规页面编写，页面交互，接口调试，富文本解析，支付等操作",
            "封装接口请求，文件上传等方法，封装分享、授权等流程并在之后的项目继续使用",
            "canvans绘制动态自选背景分销海报并保存图片",
            "极光IM处理技师端即时通讯、抢单、接单、语音播报",
            "据后端说线上流水已有六位数"
          ],
          imgList: [
            require("assets/images/8g7_qrcode.jpg"),
            require("assets/images/8g7_img1.jpg"),
            require("assets/images/8g7_img2.jpg"),
            require("assets/images/8g7_img3.jpg"),
            require("assets/images/8g7_img4.jpg")
          ]
        },
        {
          icon: require("assets/images/anst.png"),
          name: "澳纳斯汀(测试阶段)",
          desc:
            "项目包含餐厅、酒店、足浴、会员中心、商城五个小程序以及官网和相应的后台。<br>主要功能为预约、排号、点餐等。",
          detail: [
            "负责项目管理总台，餐厅和足浴门店管理后台的前端研发",
            "后续负责所有端的bug修改和需求修改(太多了。。)",
            "项目框架使用vue+webpack+ant-design-vue搭建",
            "目录和页面切换根据router自动生成",
            "vuex管理登录状态以及表格列表页全局刷新",
            "antv实现基于vue绘制图表",
            "封装图片管理插件实现后台图片的灵活存取",
            "ExportJsonExcel实现前端表导出至excel",
            "......"
          ],
          imgList: [
            require("assets/images/anst_qrcode.png"),
            require("assets/images/anst_img1.jpg"),
            require("assets/images/anst_img2.jpg"),
            require("assets/images/anst_img3.jpg"),
            // require("assets/images/anst_img4.jpg"),
          ]
        },
        {
          icon: require("assets/images/wzyf.png"),
          name: "云南网智研发平台",
          desc:
            "实现联合研发创新的企业服务平台。平台分雇主和服务商端，需求与服务建立订单并线上进行完成"
        }
      ]
    };
  },
  components: {},
  mounted() {},
  methods: {
    //查看项目详情
    projectDetail(item) {
      this.hideOther = true;

      setTimeout(() => {
        this.showingObject = item;
        this.showDetail = true;
        this.hideOther = false;
        // console.log(this.showDetail);
      }, 500);
    },
    showAll() {
      this.hideOther = true;
      setTimeout(() => {
        this.showingObject = {};
        this.hideOther = false;
      }, 500);
    },
    //预览项目
    viewObject(item) {
      ImagePreview({
        images: item.imgList,
        closeable: true,
        onClose() {
          // do something
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.project {
  width: 100%;
  text-align: center;
  .detail_popup {
    color: #333;
    border-radius: 20px;
    padding: 30px;
    width: 670px;
    box-sizing: border-box;
  }
}
.project_list {
  margin: 60px auto;
  transition: all 0.3s;

  .project_item {
    text-align: left;
    transition: all 0.3s;
    padding-right: 30px;
    box-sizing: border-box;
    padding-top: 30px;
    align-items: flex-start;
    .left_img {
      flex-shrink: 0;
      width: 160px;
      height: 100%;
      flex-flow: column;
      padding-top: 30px;
      img {
        height: 70px;
        width: auto;
        flex-shrink: 0;
      }
    }
    .name {
      text-align: center;
      padding-bottom: 20px;
    }
    .desc {
      font-size: 26px;
    }
    .left_msg {
      padding-left: 30px;
    }
    .right_msg {
      padding-right: 30px;
    }
  }
  .detail {
    font-size: 28px;
    padding: 40px;
    text-align: left;
    line-height: 42px;
  }
}
</style>

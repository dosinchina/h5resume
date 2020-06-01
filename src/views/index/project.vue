<template>
  <div class="project">
      <p>我做过什么(近期)</p>
      <div class="project_list">
          <div class="project_item pub_flex_sb" v-for="(item, index) in projectList" :key="index">
              
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
                    <van-button color="#99CCCC" plain round size="small" style="margin-top:10px;">查看项目</van-button>
                </div>
                <div class="item_msg right_msg" v-if="index%2==1">
                    <p class="name">{{item.name}}</p>
                    <p class="desc" v-html="item.desc"></p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from "vue";
import { Swipe, SwipeItem, Image as VanImage, Button } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Button);

export default {
  name: "project",
  data() {
    return {
      projectList: [
        {
          icon: require("assets/images/8g7.png"),
          name: "八个七匠优优快修服务平台",
          desc:
            "用户端小程序功能涵盖开锁换锁等家政服务线上预约、相关设备线上购买、分销等。<br>商家技师端功能涵盖抢单接单与订单跟踪、收费、汇报、统计等"
        },
        {
          icon: require("assets/images/anst.png"),
          name: "澳纳斯汀",
          desc:
            "项目包含餐厅、酒店、足浴、会员中心、商城五个小程序以及官网和相应的后台。<br>主要功能为预约、排号、点餐等。"
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
  methods: {}
};
</script>
<style lang="less" scoped>
.project {
  width: 100%;
  text-align: center;
}
.project_list {
  margin: 60px auto;

  .project_item {
    text-align: left;
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
      img{
          height: 70px;
          width: auto;
          flex-shrink: 0
      }
    }
    .name {
      text-align: center;
      padding-bottom: 20px;
    }
    .desc {
      font-size: 26px;
    }
    .left_msg{
        padding-left: 30px;
    }
    .right_msg{
        padding-right: 30px;
    }
  }
}
</style>

<template>
  <div class="index">
    <van-swipe style="height: 100vh;" vertical :loop="false" :show-indicators="false" @change="changeCurrent">
      <van-swipe-item>
        <div class="page" :style="'background-color: #99CCCC'">
          <transition name="van-fade">
            <myhead v-show="current == 0"></myhead>
          </transition>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="page" :style="'background-color: #CCCCFF'">
          <transition name="van-fade">
            
          </transition>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import myhead from "./myhead";
import Vue from "vue";
import { Button, Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
export default {
  name: "index",
  data() {
    return {
      current: 0,
      colorList: ["#99CCCC", "#CCCCFF"]
    };
  },
  components: { myhead: myhead },
  mounted() {},
  methods: {
    //页面滚顶
    changeCurrent(index) {
      this.current = index;
    }
  }
};
</script>
<style lang="less" scoped>
.test {
  width: 500px;
  height: 500px;
  background-color: #f00;
}
.page {
  width: 100%;
  height: 100%;
}
</style>

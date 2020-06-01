<template>
  <div class="index">
    <van-swipe style="height: 100vh;" vertical :loop="false" :show-indicators="false" @change="changeCurrent"  ref="swipe">
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
            <skill v-show="current == 1"></skill>
          </transition>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="page" :style="'background-color: #99CCCC'">
          <transition name="van-fade">
            <project v-show="current == 2"></project>
          </transition>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import myhead from "./myhead";
import skill from "./skill";
import project from "./project";

import Vue from "vue";
import { Button, Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
export default {
  name: "index",
  data() {
    return {
      current: -1,
      colorList: ["#99CCCC", "#CCCCFF"]
    };
  },
  components: { myhead: myhead , skill:skill , project:project},
  mounted() {
    setTimeout(() => {
      this.current = 0
    }, 300);
    let body = document.getElementsByTagName("body")[0]
    // console.log(body);
    if(body){
      body.onmousewheel = (e) => {
        // console.log(e);
        if(e.deltaY > 0){
          this.nextPage()
        }else if(e.deltaY < 0){
          this.prevPage()
        }
        
      }
    }
    
  },
  methods: {
    //页面滚顶
    changeCurrent(index) {
      setTimeout(() => {
        this.current = index;
      }, 300);
    },
    //下一页
    nextPage(){
      this.$refs.swipe.next();
    },
    //上一页
    prevPage(){
      this.$refs.swipe.prev();
    },
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.page_down{
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
</style>

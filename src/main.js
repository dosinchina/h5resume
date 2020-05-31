import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';

import 'postcss-pxtorem'//导入rem转换工具
import "./assets/js/rem"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

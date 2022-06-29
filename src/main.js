import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入aixos库，并结合vue-axios插件（将axios集成到Vue.js上）一起使用
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入全局的过滤器
import {factPrice,currency,formatTime} from './utils/filters'
//引入和安装自定义的提示框插件
import msgBox from './plugin/vue-msgbox'
Vue.use(msgBox);
//引入element-ui插件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi);

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
//设置代理服务器的地址为baseURL
axios.defaults.baseURL ='/api';

Vue.filter('factPrice',factPrice);
Vue.filter('currency',currency);
Vue.filter('formatTime',formatTime);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

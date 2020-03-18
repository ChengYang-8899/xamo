import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from "axios"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import echarts from 'echarts'
import VueSocketIO from 'vue-socket.io'
import Vant from 'vant';
import 'vant/lib/index.css';
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//vant注册
Vue.use(Vant);
Vue.use(MintUI)
Vue.prototype.$echarts = echarts
axios.defaults.baseURL="http://127.0.0.1:5050";
axios.defaults.withCredentials=true;

Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
  connection: 'http://127.0.0.1:5050',
  vuex: {
  }
}))
Vue.prototype.axios=axios;
Vue.config.productionTip = false;
router.afterEach((to,from,next)=>{
  　　　　window,scrollTo(0,0)
  
  　　}),
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

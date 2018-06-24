// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import '../static/css/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)


// function getCookie(name) {
//   let arr,
//       reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)")
//   if(arr=document.cookie.match(reg)) {
//     return decodeURIComponent(arr[2])
//   }
// }

// axios.interceptors.request.use((config) => {
//   config.headers['X-Requested-With'] = 'XMLHttpRequest';  
//   let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值  
//   config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];  
//   return config  
// }); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

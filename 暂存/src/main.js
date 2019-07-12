import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '../static/css/resetall.css'

/* 过滤器 */
Vue.filter('newDate',function (data) {
  let time=new Date(data);
  var y = time.getFullYear();
  var M = time.getMonth() + 1;
  var d = time.getDate();
  return y+'-'+M+'-'+d
});

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

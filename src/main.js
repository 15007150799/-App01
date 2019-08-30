// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import stores from './store/store'
// import './assets/css/mixin.styl'

Vue.config.productionTip = false

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = Axios  //其他页面在使用axios的时候直接  this.$http就可以了

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  stores,
  components: { App },
  template: '<App/>'
})

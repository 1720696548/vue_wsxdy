// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layui from './layui'
import global_ from './components/api/global_variable'
import resource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(resource);
Vue.prototype.GLOBAL = global_;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  layui,
  components: { App },
  template: '<App/>'
})

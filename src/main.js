import Vue from 'vue'
import App from './App.vue'

import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/iconfont.css'
import md5 from 'js-md5'
import common from './api/common'
import Router from './router/router'
import store from './vuex/store'
import Fragment from 'vue-fragment'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Fragment.Plugin);
Vue.prototype.$common = common;
Vue.prototype.$md5 = md5;
Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(element);
new Vue({
  render: h => h(App),
    router:Router,
    store,
}).$mount('#app')

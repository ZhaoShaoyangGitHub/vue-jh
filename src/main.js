import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as common from './utils/common'
import { Message } from "element-ui"

Vue.config.productionTip = false

Vue.prototype.hasClsss = common.hasClass
Vue.prototype.addClass = common.addClass
Vue.prototype.removeClass = common.removeClass

Vue.use(Message);
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

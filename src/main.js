import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as common from './utils/common'
import { Message, Dialog, Tabs, TabPane, Cascader } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'

Vue.config.productionTip = false

Vue.prototype.hasClsss = common.hasClass
Vue.prototype.addClass = common.addClass
Vue.prototype.removeClass = common.removeClass

Vue.use(Message)
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Cascader)
Vue.prototype.$message = Message
Vue.prototype.$dialog = Dialog

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

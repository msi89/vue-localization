import Vue from 'vue'
import FlagIcon from 'vue-flag-icon'
import VueSession from 'vue-session'

import App from './App.vue'
import router from './router'
import store from './store'
import {i18n} from './plugins/i18n'



import defaultLayout from './layouts/default.vue'

Vue.config.productionTip = false
// register layouts
Vue.component('default-layout', defaultLayout)

Vue.use(FlagIcon)
Vue.use(VueSession)


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

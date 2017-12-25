// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueGoodTable from 'vue-good-table'

import App from './App'
import router from './router'

// Use if you need
// require('./assets/css/theme.css')

Vue.config.productionTip = false
Vue.use(VueGoodTable)

Vue.prototype.$brand = 'VueJSDashboard'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
  },
  router,
  template: '<App/>',
  components: { App }
})

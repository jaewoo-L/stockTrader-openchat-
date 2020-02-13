import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.filter('currency', function (value) {
  return '$' + value.toLocaleString();
})

Vue.config.productionTip = false
var eventBus = new Vue({});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

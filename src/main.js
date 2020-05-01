import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios';
import './global/rem.js';
import './global/main.less';
Vue.prototype.$axios = axios 

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

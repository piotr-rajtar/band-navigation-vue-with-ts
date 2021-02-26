import Vue from 'vue'
import App from './App.vue'

import store from './store/store';
import router from './router';

import MenuItem from './components/MenuItem.vue';

Vue.config.productionTip = false

Vue.component('menu-item', MenuItem);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

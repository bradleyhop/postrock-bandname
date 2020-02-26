import Vue from 'vue';
import App from './App.vue';

// scss for index.html, background
require('../public/assests/css/index.scss');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

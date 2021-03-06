import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animated from 'animate.css';
import 'lib-flexible';

Vue.config.productionTip = false;
Vue.use(animated);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

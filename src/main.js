import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import animated from 'animate.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(animated);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

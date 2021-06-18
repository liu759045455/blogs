import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import $ from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/reset.less';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Antd);
Vue.prototype.$ = $;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

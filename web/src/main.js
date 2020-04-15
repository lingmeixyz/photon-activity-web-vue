import Vue from 'vue';
import { Button } from 'ant-design-vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';

Vue.component(Button.name, Button);

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
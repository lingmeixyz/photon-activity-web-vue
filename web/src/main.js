import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'ant-design-vue'
import { Layout } from 'ant-design-vue'
import { Carousel } from 'ant-design-vue'
import { Icon } from 'ant-design-vue'
import { Card } from 'ant-design-vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Layout)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(Icon)
Vue.use(Card)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

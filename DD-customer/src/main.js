import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

import FullLayout from './components/FullLayout'
Vue.component('briup-fulllayout',FullLayout)
import ProductItem from './components/ProductItem'
Vue.component('briup-product-item',ProductItem)
import OrderItem from './components/OrderItem'
Vue.component('briup-order-item',OrderItem)
import AddressItem from './components/AddressItem'
Vue.component('briup-address-item',AddressItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

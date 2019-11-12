import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './modules/user'
import order from './modules/order'
import home from './modules/home'
import address from './modules/address'
import addaddress from './modules/addaddress'
import category from './modules/category'
import product from './modules/product'
import shopcar from './modules/shopcar'


export default new Vuex.Store({
  
  modules: {
    user,
    order,  
    home,
    address,
    addaddress,
    category,
    product,
    shopcar
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './user'
import order from './order'
import address from './address'

export default new Vuex.Store({
  modules:{
    user,
    order,
    address
  }
})

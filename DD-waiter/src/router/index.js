import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {  path:'/',
    redirect:'/login',
    // path:"/manager",
    name: '/manager',
    component: Manager,
    children:[{
      path:"home",
      component:() => import('../pages/manager/Home.vue')
    },{
      path:"order",
      component:() => import('../pages/manager/Order.vue')
    },{
      path:"detail",
      component:() => import('../pages/manager/detail.vue')
    },{
      path:"addressMan",
      component:() => import('../pages/manager/addressMan.vue')
    },{
      path:"user",
      component:() => import('../pages/manager/User.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

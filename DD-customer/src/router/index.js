import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
import Address from '../views/manager/address/Address'
import AddAddress from '../views/manager/address/AddAddress'
import editAdress from '../views/manager/address/editAdress'
import ProductList from '../views/manager/ProductList'

import Comment from '../views/manager/Comment'

import OrderConfirm from '../views/manager/OrderConfirm'


import Login from '../views/Login'
import { getToken } from '../utils/auth'
import { Toast } from 'vant'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { 
    path: '/manager',
    name: 'manager',
    component: Manager,
    // beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
    //   let token = getToken();
    //   if(token){
    //     // 查询info
    //     store.dispatch('user/userInfo',token)
    //     .then(()=>{
    //       // 当获取万用户信息之后才允许跳转
    //       next();
    //     })
    //   } else {
    //     Toast("token失效")
    //     // 跳转到登录
    //     next({path:'/login'})
    //   }
    // },
    children:[
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'order',
        component: Order,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'address',
        component: ()=>import('../views/manager/address/Address') 
      },{
        path: 'editadress',
        component: ()=>import('../views/manager/address/editAdress') 
      },
      {
        path: 'addaddress',
        component: ()=>import('../views/manager/address/AddAddress') 
      },{
        path:'productList',
        component: ProductList
      },{
        path:'comment',
        component: Comment
      },
      {
        path: 'order_confirm',
        component:OrderConfirm 
      }
    ] 
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import {get,post_obj_array} from '../../http/axios'
import { root } from 'postcss';

export default {
    namespaced: true,
    state: {
        orders:[]
    },
    getters:{
        orderStatusFilter:(state)=>{
            return function(status){
                if(status){
                    return state.orders.filter(item=>item.status === status)
                }else{
                    return  state.orders;
                }
            }
        }
    },
    mutations: {
        refreshOrder(state,orders){
            state.orders = orders
        }        
    },
    actions: {
        // 查询当前用户的所有订单
        async findAllOrder({commit,rootState}){
            let customerId = rootState.user.userInfo.id
            let response = await get("/order/query",{customerId})
            commit("refreshOrder",response.data)
        },
        // 确认保存订单
        async saveOrder({commit,rootState}){
            // 拿到后台接口需要信息值，从别的状态机去拿
            let customerId = rootState.user.userInfo.id;
            // 将顾客id写死，默认拿到第一个
            let addressId = rootState.address.addresses[0].id;
            // console.log(addressId)
            // 购物车中的订单
            let orderLines = rootState.shopcar.orderLines;
            // 1.保存订单
            let data = {customerId,addressId,orderLines}
            let response = await post_obj_array("/order/save",data)
            // 2.清理购物车
            commit("shopcar/clearShopcar",null,{root:true})
            return response;
        }
    },
}


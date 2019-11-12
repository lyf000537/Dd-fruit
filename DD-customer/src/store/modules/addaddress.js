import {get,post} from "../../http/axios"

export default {
    namespaced: true,
    state: {
        
    },
    mutations: {
              
    },
    actions: {
        async onSave({dispatch,commit,rootState},info){
            let customerId = rootState.user.userInfo.id;
            let information = {
                customerId:customerId,
                province:info.province,
                city:info.city,
                area:info.county,
                address:info.addressDetail,
                telephone:info.tel
            }
            let response = await post("/address/saveOrUpdate",information)
        }
    }
    
}


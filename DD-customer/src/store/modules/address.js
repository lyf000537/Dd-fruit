import { get } from "../../http/axios";
import { root } from "postcss-selector-parser";
// import user from "./user";
// import address from "address";

export default {
    namespaced: true,
    state: {
        addresses:[]
    },
    mutations: {
        refreshAddress(state,addresses){
            state.addresses = addresses
        }   
    },
    actions: {
        // async findAddress({commit,rootState}){
        //     let response = await get("/address/findByCustomerId",{id:rootState.user.userInfo.id})
        //     commit("refreshAddress",response.data)
        // },
        async findAddress({commit,rootState}){
            // 根据用户id查询地址
            let response = await get("/address/findByCustomerId",{id:rootState.user.userInfo.id})
            .then((response)=>{
                let addresses = [];
                response.data.forEach(item=>{
                    // console.log(item,'===')
                    let address = {
                        id: item.id,
                        name: 'lyf',
                        tel: item.telephone,
                        address: item.province+""+item.city+""+item.area+""+item.address
                    }
                    addresses.push(address);
                })
                commit("refreshAddress",addresses)
                // console.log(response)
            })
        }
        

    },
}

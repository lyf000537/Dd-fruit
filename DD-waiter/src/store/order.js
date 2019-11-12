import { get } from "@/http/axios";

export default {
    namespaced:true,
    state: {
      form:[],
      wjform:{}
    },
    getters:{
      ddHandler(state){
        return function(status){
          return state.form.filter((item)=>{
           return item.status === status;
          })
        }
        // if(stete.form.status === "待接单"){
        //   return form.status;
        }
    },
    mutations: {
      refreshFome(state,form){
        state.form = form
      },
      setTitle(state,title){
        state.title = title;
      }
    },
    actions: {
      async loadDate(context){
       let response =  await get("/order/findAll")
        context.commit("refreshFome",response.data)
      },
      async reject(context,id){
        let  response =  await get("/order/rejectOrder?orderId="+id)
        return response;
      },
      async accept(context,id){
        let  response =  await get("/order/takeOrder?orderId="+id)
        return response;
      },
      async service(context,id){
        let  response =  await get("/order/serviceCompleteOrder?orderId="+id)
        return response;
      },
      async delete(context,id){
        let  response =  await get("/order/deleteById?id="+id)
        return response;
      },
  }
}
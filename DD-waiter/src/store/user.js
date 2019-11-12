import {get,post_json,post} from '@/http/axios'
import {setToken,getToken,removeToken} from '../utils/auth'
export default {
  namespaced:true,
  state: {
    token:getToken(),
    info:{}//用户信息
  },
  mutations: {
    refreshInfo(state,info){
      state.info = info;
    },
    refreshToken(state,token){
      state.token = token;
    }
  },
  actions: {
    //登录
    async login(context,payload){
      let response = await post_json("/user/login",payload);
      let token = response.data.token;
      setToken(token);
      context.commit("refreshToken",token);
      return response
    },
    //通过token获取信息
    async infos(context,token){
      let response = await get("/user/info", {token});
      context.commit("refreshInfo",response.data)
    },
    //退出
    async logout(context){
      await post("/user/logout");
      removeToken();
      context.commit('refreshToken',"");
      context.commit('refreshInfo',null);

    }
  }
}
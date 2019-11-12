import {get,post_json,post} from '../../http/axios'
import {setToken,getToken,removeToken} from '../../utils/auth'

export default {
    namespaced:true,
    state: {
        token:getToken(),
        userInfo:{} //用户信息
    },
    mutations: {
        refreshInfo(state,userInfo){
            state.userInfo = userInfo
        },
        refreshToken(state,token){
            state.token = token
        }
    },
    actions: {
        async login(context,payload) {
            // 1.登录
            // 用户输入登录信息
            let response = await post_json("/user/login",payload);
            // 拿到当前顾客的token
            let token = response.data.token;
            // 将token缓存起来
            setToken(token);
            // 将token维护到状态机当中
            context.commit("refreshToken",token)
        },
        // 通过token获取userInfo
        async getInfo(context,token) {
            // 2.通过token换取用户基本的信息
            let response = await get("/user/info",{token});
            // 将用户信息放到userInfo中
            context.commit("refreshInfo",response.data)
        },
        // 退出
        async logout(context){
            // 1.请求后台退出
            let response = await post("/user/logout")
            // 2. 清理本地缓存
            removeToken();
            // 3. 清理token,将token设为空，将info设为null
            context.commit("refreshToken",'');
            context.commit("refreshInfo",'');
        }
    },
}


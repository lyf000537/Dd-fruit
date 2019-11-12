<template>
    <div class="index">
        <!-- 用于接受管理页面，首页，订单页，我的页面 -->
        <router-view></router-view>
        <!-- <div>
            <router-link to="/manager/home">首页</router-link>
            <router-link to="/manager/order">订单</router-link>
            <router-link to="/manager/user">我的</router-link>
        </div> -->
        <!-- token：{{token}} -->
        <!-- userInfo：{{userInfo}} -->
        <div>
            <van-tabbar v-model="active" @change="changeTabHandler">
                <van-tabbar-item name="/manager/home" icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item name="/manager/order" icon="search">订单</van-tabbar-item>
                <van-tabbar-item name="/manager/user" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data() {
        return {
            active:0
        }
    },
    created(){
        if(this.token){
            // 查询userInfo
            this.getInfo(this.token)
        }else{
            this.$toast("token失效")
            // 跳转到登录
            this.$router.push({path:"/login"})
        }
    },
    computed:{
        ...mapState("user",["token","userInfo"])
    },
    methods:{
        ...mapActions("user",["getInfo"]),
        changeTabHandler(path){
            this.$router.push({path})
        }
    }
}
</script>
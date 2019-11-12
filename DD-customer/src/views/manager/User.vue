<template>
    <div class="user">
        <!-- 标题 -->
        <h2 style="text-align:center">我的</h2>
        <!-- 头像 -->
        <div class="img_user">
            <img :src="userInfo.avatar" />
        </div>
       
        <!-- 用户信息 -->
        <div style="text-align:center">{{userInfo.name}}</div>
        <!-- 列表 -->
        <van-cell-group>
            <van-cell @click.prevent="reloadAddress" icon="location-o" title="常用地址"/>
            <van-cell @click.prevent="logoutHandler" icon="close" title="退出"/>
        </van-cell-group>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    // created(){
    //     this.login();
    // },
    computed:{
        ...mapState("user",["userInfo"])
    },
    methods:{
        ...mapActions("user",["logout"]),
        logoutHandler(path){
            // 先退出
            this.logout()
            // 退出成功后进行跳转
            .then(()=>{
                this.$router.push({path:'/login'})
            })
        },
        reloadAddress(path){
            this.$router.push({path:'/manager/address'})
        }
    }
}
</script>
<style>
    .img_user{
        text-align: center;
    }
    .img_user img{
        height: 100px;
        width: 100px;
        border-radius: 50px;
    }
</style>
<template>
    <div class="login">
        <div class="header">
            <div class="logo">DDF</div>
            <div class="title">
                铛铛水果铺-顾客端
            </div>
        </div>
        <!-- {{form}} -->
        <div class="form">
            <van-cell-group>
                <van-field
                    v-model="form.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    />
                <van-field
                    v-model="form.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required/>
            </van-cell-group>
        </div>
        <!-- 按钮 -->
        <div style="text-align:center">
            <van-button @click="loginHandler" size="small" plain type="primary">登录</van-button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            form:{
                type:"customer"
            }
        }
    },
    methods:{
        ...mapActions("user",["login"]),
        loginHandler(){
            this.login(this.form)
            .then(()=>{
                // 调转到首页
                this.$router.push({path:'/manager/home'})
            })
        }
    }
}
</script>

<style scoped>
    .header{
        height: 150px;
        padding-top: 50px;
        background-color: #aed1b3; 
        color: #fff;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
    }
   
   

</style>
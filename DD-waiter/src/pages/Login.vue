<template>
  <div class="login">
    <div class="title">
      <span>铛铛水果铺员工管理平台</span>
    </div>
    <!-- 图标 -->
    <div class="tb">
       <van-icon name="friends-o" />
    </div>
    <!-- 输入框 -->
    <div class="dl">
      <van-cell-group>
        <van-field size="small" v-model="form.username" label="用户名：" placeholder="请输入用户名" />
      </van-cell-group>
      <van-cell-group>
        <van-field size="small" v-model="form.password" label="密码：" placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <!-- 登录按钮 -->
    <div class="btn">
      <van-button type="info" size="large"  @click="loginHandler">登录</van-button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        type:'waiter'
      },
    }
  },
  methods:{
    ...mapActions("user",["login"]),
    loginHandler(){
      this.login(this.form)
      .then((response)=>{ 
        if(response.status === 200){
          this.$notify({
            message:"success",
            color:"yellow"
          })
           this.$router.push("/home")
        }else{
          this.$notify({
            message:"用户名或密码错误",
            color:"red"
          })
        }
       })
    }
  }
}
</script>
<style>
  .title{
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    line-height: 50px;
    color:lightskyblue;
  }
  .tb{
    text-align: center;
    font-size: 120px;
    color:lightskyblue;
    margin-top: 30px;

  }
  .btn{
    text-align: center;
    margin-top: 20px;
  }
</style>
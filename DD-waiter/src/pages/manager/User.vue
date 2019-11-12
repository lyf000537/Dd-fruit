<template>
  <div class="user">
    <h2>我的页面</h2>
    <div class="icon">
         <van-icon name="user-o" />
    </div>
    <div class="name">
      {{info.name}}
    </div>
    <div class="detail" @click="detailHandler"> 
      详细信息  
    </div>
    <div class="address" @click="AddressManger">
      地址管理
    </div>
      <div @click="tabChangeHandler" class="out">
         <van-button type="primary" size="large">退出登录</van-button>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
    }
  },
  created(){
    
  },
  methods:{
    ...mapActions("user",["logout"]),
    tabChangeHandler(){
     this.logout()
     this.$router.push("./login")
    },
    detailHandler(){
      this.$router.push("detail");
    },
    AddressManger(){
      this.$router.push("addressMan");
    }
  },
  computed:{
    ...mapState("user",["info"])
  }
}
</script>
<style >
h2{
  text-align:center;
}
.out{
  margin-bottom: 0%;
  color: darkorange;
   border-bottom: 2px solid #fff;
}
.icon{
  text-align: center;
  font-size: 100px;
  color: lightblue;
}
.name{
  text-align: center;
 position: absolute;
 top:168px;
 left: 135px;
}
.detail{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: border;
  background-color:lightblue;
  border-bottom: 2px solid #fff;
}
.address{
  height: 50px;
  line-height: 50px;
  background-color: lightblue;
  text-align: center;
   border-bottom: 2px solid #fff;
}
</style>
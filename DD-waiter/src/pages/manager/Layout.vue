<template>
  <div class="order">
    <router-view></router-view>
    <div>
      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/user">我的</router-link> -->
      <van-tabbar v-model="active" @change="tabChangeHandler">
        <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
        <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
        <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  created(){
    this.loadDate();
    if(this.token){
      this.infos(this.token);
    }else{
      this.$toast("token失效")
      this.$router.push("./login")
    }
  },
  computed:{
    ...mapState("user",["token",'info','']),
  },
  methods:{
    ...mapActions("user",["infos"]),
    ...mapActions("order",["loadDate"]),
    tabChangeHandler(path){
      this.$router.push({path})
    },
    loadDate(){
      
    }
  }
}
</script>
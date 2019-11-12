<template>
  <div>
      <div class="del">
     <van-row>
        <van-col span="9"><van-icon style="margin-left:5px;" name="https://i.52112.com/icon/jpg/256/20190626/45680/2124035.jpg" @click="backHandler"/></van-col>
        <van-col span="15">详细信息</van-col>
        </van-row>`
     </div>
   <div class="tab">
            <van-tabs v-model="active">
                <van-tab title="ID">{{info.id}}</van-tab>
                <van-tab title="类型">waiter</van-tab>
                <van-tab title="顾客名">{{info.name}}</van-tab>
                <van-tab title="描述">{{info.introduction}}</van-tab>
            </van-tabs>
      </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            active:2
        };
    },
    created(){

    },
    computed:{
        ...mapState("user",["info"])
    },
    methods:{
        backHandler(){
            this.$router.push("user")
        }
    }
}
</script>

<style>
.del{
    height: 40px;
    line-height: 40px;
   font-size: 20px;
   /* text-align: center; */
   background-color: rgb(117, 248, 150);
}
.tab{
    font-size: 18px;
}
</style>template
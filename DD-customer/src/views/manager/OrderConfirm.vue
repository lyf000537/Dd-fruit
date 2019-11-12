<template>
    <div class="orderconfirm">
        <briup-fulllayout title="确认订单">
        <!-- 地址信息 -->
        <van-row class="line">
            <van-col :span="6" class="line-left">
            <van-icon name="location-o" />
            </van-col>
            <van-col :span="18" class="line-right">
            <div class="label">服务地址</div>
            <div>
                <van-col :span=8>姓名：{{addresses[0].name}}</van-col>
                <van-col :span=16>手机号：{{addresses[0].tel}}</van-col>
                <van-col >地址：{{addresses[0].address}}</van-col>   
            </div>
            </van-col>
        </van-row>

        <!-- 订单项 -->
        <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="balance-list-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">订单详情</div>
          <div>
            <van-row v-for="line in orderLines" :key="line.productId">
              <van-col :span="8">{{line.productName}}</van-col>
              <van-col :span="4">￥{{line.price}}</van-col>
              <van-col :span="4">x{{line.number}}</van-col>
              <van-col :span="8">￥{{line.number*line.price}}</van-col>
            </van-row>           
            <van-row style="border-top:1px dotted #ededed">
              <van-col :span="16"></van-col>
              <van-col :span="8">￥{{total}}</van-col>
            </van-row>            
          </div>
        </van-col>
      </van-row>

      <!-- 服务时间 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="clock-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务时间</div>
          <div @click="()=>{this.show = true}">
            {{currentDate}}
          </div>
        </van-col>
      </van-row>

      <!-- 支付方式 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="gold-coin-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">支付方式</div>
          <div>第三方平台（支付宝）</div>
        </van-col>
      </van-row>
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker v-model="currentDate" type="datetime"/>
      </van-popup>

      <!-- 按钮 -->
      <div style="position:fixed;bottom:0;width:100%" >
        <van-button  type="primary" size="large" @click="confirmOrderHandler">确认订单</van-button>
      </div>

        </briup-fulllayout>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            currentDate:new Date(),
            show:false
        }
    },
    computed:{
        ...mapState("shopcar",["orderLines"]),
        ...mapState("address",["addresses"]),
        ...mapGetters("shopcar",["total"])
    },
    created(){
        this.findAddress()
    },
    methods:{
        ...mapActions("order",["saveOrder"]),
        ...mapActions("address",["findAddress"]),
        confirmOrderHandler(){
            this.saveOrder()
            .then((response)=>{
                this.$toast(response.statusText)
                this.$router.push({path:'/manager/home'})
            })
        }
    },

}
</script>

<style scoped>
.line  .line-left {
  padding: 1em 0;
  text-align: center;
  font-size: 24px;
}
.line  .line-right {
  padding: 1em 0;
  border-bottom: 1px solid #ccc;
}
.line  .line-right > .label {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  line-height: 2em;
}
</style>
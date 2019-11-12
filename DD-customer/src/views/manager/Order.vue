<template>
    <div class="order">
        <!-- 标题 -->
        <h2 style="text-align:center">我的订单</h2>
        <!-- 标签页 -->
        <!-- {{orders}} -->
        <van-tabs v-model="status">
            <van-tab title="全部订单">
            </van-tab>
            <!-- <van-tab title="未付款" name="未付款"></van-tab> -->
            <van-tab title="待服务" name="待派单"></van-tab>
            <van-tab title="待确认" name="待确认"></van-tab>
            <van-tab title="已完成" name="已完成"></van-tab>
        </van-tabs>
        <!-- 商品列表 -->
        <div class="o_list" v-for="o in orderStatusFilter(status)" :key="o.id">
            <van-row type="flex" justify="space-around">
            <van-col span="10">
                <!-- <div> -->
                    <img src="../../assets/images/tp.jpg" alt="">
                <!-- </div> -->
            </van-col>
            <van-col span="16">
                <p class="orderTime">下单时间：{{setTime(o.orderTime)}}</p>
                <p class="total">总额：{{o.total}}</p>
                <p class="status">进度：{{o.status}}</p>
                <p v-show="status == '已完成'">
                    <van-button icon="comment" type="primary" size="mini" round style="margin-right:10px" @click="toComment(o.id)"/>
                    <van-button icon="clear" type="danger" size="mini" round @click="deleteOrder(o.id)"/>
                </p>
                <p v-show="status == '待确认'">
                    <van-button icon="certificate" type="primary" size="mini" round @click="qddd(o.id)"/>
                </p>

            </van-col>
        </van-row>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapActions,mapGetters } from 'vuex'
import { get } from '../../http/axios'
export default {
    data() {
        return {
            status:"全部订单"
        }
    },
    created(){
        this.findAllOrder()
    },
    computed:{
        ...mapState("order",["orders"]),
        ...mapGetters("order",["orderStatusFilter"]),
        
    },
    methods:{
        ...mapActions("order",["findAllOrder"]),
        setTime(time){
            return moment(time).format('LL');
        },
        toComment(id){
            this.$router.push({
                path:'./Comment',
                query:{id}
            })
        },
        async deleteOrder(id){
            let response = await get("/order/deleteById?id="+id);
            this.findAllOrder()
        },
        qddd(id){
            get("/order/confirmOrder?orderId="+id);
            this.findAllOrder()
        }
    }
    
}
</script>

<style scoped>
    .o_list img{
        height:100px;
        width: 100px;
    }
    .orderTime,.total,.status{
        font-size: 14px;
    }
</style>
<template>
  <div class="order">
    <div class="dingd">订单管理</div>
 
    <div class="head">
      <van-tabs v-model="active" class="style"   >
        <van-tab title="所有订单">
           <div v-for=" a in form"  :key="a.id" >
               <div class="van-cell van-panel__header">
                  <div class="van-cell__title">
                    <span>{{"订单id:"+a.id}}</span>
                  </div>
                  <div class="van-cell__value van-panel__header-value">
                     <span>{{a.status}}</span>
                  </div>
              </div>
              <div class="van-panel__content">
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                       <i class="van-icon van-icon-gem-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"总价:"+a.total}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"订单时间:"+a.orderTime}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"员工Id："+a.waiterId}}</div>
                  </div>
                  <div class="van-row">
                    <div class="van-col van-col--4" style="text-align: center;">
                      <i class="van-icon van-icon-location-o"></i>
                    </div>
                    <div class="van-col van-col--20">{{"地址："+a.addressId}}</div>
                    </div>
                  </div>
                  <div class="van-panel__footer van-hairline--top">
                    <div style="text-align: right;"></div></div>
             </div>
            
          </van-tab>
          <van-tab title="未接订单">
                <div  v-for=" a in ddHandler('待接单')" :key="a.id" >
                  <div class="van-cell van-panel__header">
                  <div class="van-cell__title">
                    <span>{{"订单id："+a.id}}</span>
                  </div>
                  <div class="van-cell__value van-panel__header-value">
                     <span>{{a.status}}</span>
                  </div>
              </div>
              <div class="van-panel__content">
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                       <i class="van-icon van-icon-gem-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"总价:"+a.total}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"订单时间:"+a.orderTime}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"员工Id："+a.waiterId}}</div>
                  </div>
                  <div class="van-row">
                    <div class="van-col van-col--4" style="text-align: center;">
                      <i class="van-icon van-icon-location-o"></i>
                    </div>
                    <div class="van-col van-col--20">{{"地址："+a.addressId}}</div>
                    </div>
                  </div>
                  <div class="van-panel__footer van-hairline--top">
                      <div style="text-align: right;">
                        <van-button size="small" plain hairline type="danger"
                         @click="rejectorder(a.id)" >拒绝</van-button>
                        &nbsp;
                        <van-button size="small" plain hairline type="info" 
                         @click="acceptorder(a.id)" >接受</van-button>
                      </div>
                  </div>
                </div>
          </van-tab>
          <van-tab title="已接订单">
            <div  v-for=" a in ddHandler('待服务')" :key="a.id" >
              
              <div class="van-cell van-panel__header">
                  <div class="van-cell__title">
                    <span>{{"订单id："+a.id}}</span>
                  </div>
                  <div class="van-cell__value van-panel__header-value">
                     <span>{{a.status}}</span>
                  </div>
              </div>
              <div class="van-panel__content">
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                       <i class="van-icon van-icon-gem-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"总价:"+a.total}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"订单时间:"+a.orderTime}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"员工Id："+a.waiterId}}</div>
                  </div>
                  <div class="van-row">
                    <div class="van-col van-col--4" style="text-align: center;">
                      <i class="van-icon van-icon-location-o"></i>
                    </div>
                    <div class="van-col van-col--20">{{"地址："+a.addressId}}</div>
                    </div>
                  </div>
                  <div class="van-panel__footer van-hairline--top">
                      <div style="text-align: right;">
                        <van-button size="small" plain hairline type="primary"
                         @click="serviceCompleteOrder(a.id)" >结束服务</van-button>  
                      </div>
                  </div>
            </div>
          </van-tab>
          <van-tab title="待确认">
             <div  v-for=" a in ddHandler('待确认')" :key="a.id" >
              
              <div class="van-cell van-panel__header">
                  <div class="van-cell__title">
                    <span>{{"订单id："+a.id}}</span>
                  </div>
                  <div class="van-cell__value van-panel__header-value">
                     <span>{{a.status}}</span>
                  </div>
              </div>
              <div class="van-panel__content">
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                       <i class="van-icon van-icon-gem-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"总价:"+a.total}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"订单时间:"+a.orderTime}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"员工Id："+a.waiterId}}</div>
                  </div>
                  <div class="van-row">
                    <div class="van-col van-col--4" style="text-align: center;">
                      <i class="van-icon van-icon-location-o"></i>
                    </div>
                    <div class="van-col van-col--20">{{"地址："+a.addressId}}</div>
                    </div>
                  </div>
                  <div class="van-panel__footer van-hairline--top">
                      <div style="text-align: right;">
                      </div>
                  </div>
            </div>
          </van-tab>
          <van-tab title="完成订单" >
            <div   v-for=" a in ddHandler('已完成')" :key="a.id" >
              
               <div class="van-cell van-panel__header">
                  <div class="van-cell__title">
                    <span>{{"订单id："+a.id}}</span>
                  </div>
                  <div class="van-cell__value van-panel__header-value">
                     <span>{{a.status}}</span>
                  </div>
              </div>
              <div class="van-panel__content">
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                       <i class="van-icon van-icon-gem-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"总价:"+a.total}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"订单时间:"+a.orderTime}}</div>
                  </div>
                  <div class="van-row">
                      <div class="van-col van-col--4" style="text-align: center;">
                        <i class="van-icon van-icon-clock-o"></i>
                      </div>
                      <div class="van-col van-col--20">{{"员工Id："+a.waiterId}}</div>
                  </div>
                  <div class="van-row">
                    <div class="van-col van-col--4" style="text-align: center;">
                      <i class="van-icon van-icon-location-o"></i>
                    </div>
                    <div class="van-col van-col--20">{{"地址："+a.addressId}}</div>
                    </div>
                  </div>
                  <div class="van-panel__footer van-hairline--top">
                      <div style="text-align: right;">
                        <van-button size="small" plain hairline type="primary"
                         @click="deleteorder(a.id)" >删除订单</van-button>  
                      </div>
                  </div>
            </div>
          </van-tab>
      </van-tabs>
    </div>
    
    
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { reject } from 'q';
export default {
    data(){
      return{
        active:0,
        order:[]
      }
    },
    created(){
this.loadDate();
    },
    computed:{
      ...mapState("order",["form"]),
       ...mapGetters("order",["ddHandler"])
    },
    methods:{
      ...mapActions("order",["loadDate","findAll","reject","accept","service","delete"]),  
      rejectorder(id){
        this.reject(id).then((res)=>{
         alert(res.statusText)
         this.loadDate();
        })
      },
      acceptorder(id){
        this.accept(id).then((res)=>{
         alert(res.statusText)
         this.loadDate();
        })
      },
      serviceCompleteOrder(id){
        this.service(id).then((res)=>{
         alert(res.statusText)
         this.loadDate();
        })
      },
      deleteorder(id){
        this.delete(id).then((res)=>{
         alert(res.statusText)
         this.loadDate();
        })
      }

    }
}
</script>
<style>
  /* .order{
    background-color: #ccc;
  } */
  .dingd{
    text-align: center;
    background-color: lightblue;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
  }
  .gk{
    margin-bottom: 5px;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
  }
  .style{
   
  }
  .wcdd{
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  
</style>
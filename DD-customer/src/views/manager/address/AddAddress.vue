<template>
    <div class="addaddress">
        <!-- 添加地址头部 -->
        <div class="one"><van-nav-bar
            title="添加地址"
            left-text="返回"
            left-arrow
            @click-left="returnHandler"
        /></div>
        <van-address-edit
            v-model="form"
            :area-list="areaList"   
            show-delete
            show-search-result
            :search-result="searchResult"
            @save="saveAddress"
            @delete="onDelete"
        />
        {{userInfo}}
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import areaList from '../../../utils/areaList'
export default {
    data(){
        return{
            areaList,
            searchResult: [],
            form:{}
        }
    },
    computed:{
        ...mapState("user",["userInfo"])
    },
    methods:{
        ...mapActions("addaddress",["onSave"]),
        returnHandler(){
            this.$router.push({path:"/manager/address"})
        },
        // 保存地址信息
        saveAddress(info){
            this.onSave(info);
             this.$router.push({path:"/manager/address"})

        },
        onDelete(){

        }
    },
    created(){
        
    },

}
</script>
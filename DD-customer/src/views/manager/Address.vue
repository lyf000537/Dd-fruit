<template>
    <div class="address">
        <div class="one"><van-nav-bar
            title="地址列表"
            left-text="返回"
            left-arrow
            @click-left="returnHandler"
        /></div>
            <van-address-list
                :v-model="chosenAddressId"
                :list="addresses"
                @add="onAdd"
                @edit="onEdit"
            />
        
    </div>
</template>

<script>
import {mapState, mapActions,mapMutations} from 'vuex'

export default {
    data(){
        return{
        chosenAddressId:'1',
        }
    },
    created(){
        // this.findAllAddress()
        this.findAddress(this.userInfo.id)
        // console.log(this.addresses)
    },
    computed:{
        ...mapState("user",["userInfo"]),
        ...mapState("address",["addresses"])
    },
    methods:{
        ...mapActions("address",["findAddress"]),
        returnHandler(path){
            this.$router.push({path:"user"})
        },
        onAdd(){
            // alert("添加")
            this.$router.push({path:"/addaddress"})
        },
        onEdit(){
            alert("修改")
        }
    }
}
</script>

<style scoped>

</style>
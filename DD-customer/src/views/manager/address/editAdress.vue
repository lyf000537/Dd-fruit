<template>
    <briup-fulllayout>
        <div id="editAdress">
            <van-address-edit
                v-model="form"
                :area-list="areaList"   
                show-delete
                show-search-result
                :search-result="searchResult"
                @save="saveAddress"
                @delete="onDelete"
            />
        </div>
    </briup-fulllayout>
</template>

<script>
import areaList from '../../../utils/areaList'
export default {
    data(){
        return {
            id:1,
            areaList,
            searchResult: [],
            form:{}
        }
    },
    methods:{
        saveAddress(){

        },
        onDelete(){

        }
    },
    created(){
        this.id = this.$route.query.id;
    }
}
</script>

<style scoped>

</style>

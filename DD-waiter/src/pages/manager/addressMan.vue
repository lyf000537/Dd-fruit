<template>
  <div class="dzgl">
      地址管理
      <div>
          {{address}}
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){
         this.findAddressByCustomerId()
    },
    computed:{
        ...mapState("address",["address"])
    },
    methods:{
        ...mapActions("address",["findAddressByCustomerId"]),
       
    }

}
</script>

<style>

</style>
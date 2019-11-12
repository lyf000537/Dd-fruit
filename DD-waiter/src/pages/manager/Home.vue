<template>
  <div class="home" style="overflow:hidden; height: 100%;
 width: 100%;">
    <div class="tp" style="height: 100%;
 width: 100%;" >
      <img src="./title.jpg" alt="">
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState("user",["info"])
  }
}
</script>
<style>
.tp{
  height: 200px;
  width: 200px;
}
img{
 height: 100%;
 width: 100%;
}
</style>
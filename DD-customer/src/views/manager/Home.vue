<template>
    <div class="home">
        <!-- 图片区域 -->
        <header>
            <img style="width:100%" src="../../assets/images/home1.png" alt="">
        </header> 
        <!-- 栏目区 -->
        <!-- {{categories}} -->
        <van-grid :column-num="3">
            <van-grid-item
                @click="toProductListHandler(c.id,index)"
                v-for="(c,index) in categories"
                :key="c.id"
                :icon="c.icon"
                :text="c.name"
            />
        </van-grid>
        <!-- 产品区 -->
        <!-- {{products}} -->
        <van-grid :column-num="2">
            <van-grid-item
                v-for="p in products"
                :key="p.id">
                <van-image :src="p.photo" />
                <div>{{p.name}}</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import {mapState,mapActions, mapMutations} from 'vuex'

export default {
    data() {
        return{

        }
    },
    created(){
        this.findAllCategories();
        this.findAllProducts({page:0,pageSize:4})
    },
    computed:{
        ...mapState("home",["categories","products"])
    },
    methods:{
        ...mapActions("home",["findAllCategories","findAllProducts"]),
        ...mapMutations("home",["refreshCategories"]),
        toProductListHandler(id,activekey){
            this.$router.push({path:'productlist',query:{id,activekey}})
        }
    }
}
</script>
<style scoped>
    .home {
        padding-bottom: 50px;
    }
    .header {
        height: 200px;
        overflow: hidden;
    }
</style>
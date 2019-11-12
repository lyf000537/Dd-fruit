<template>
    <briup-fulllayout title="产品评论">
        <div id="Comment">
            <div class="top">
                <van-cell-group>
                    <van-field
                        v-model="form.content"
                        rows="2"
                        autosize
                        label="评论"
                        type="textarea"
                        placeholder="请输入评论"
                        show-word-limit
                    />
                </van-cell-group>
            </div>

            <div class="start">
                <van-rate v-model="value" :size="40"/>
            </div>

            <div class="button">
                <van-button type="primary" size="large" @click="saveComment">提交</van-button>
            </div>
        </div>
    </briup-fulllayout>
</template>

<script>
import {post} from "../../http/axios"
export default {
    data(){
        return {
            value:0,
            form:{}
        }
    },
    methods:{
        saveComment(){
            post("/comment/saveOrUpdate",this.form);
            this.$router.push({path:'./order'})
        }
    },
    created(){
        this.form.orderId = this.$route.query.id;
        // this.form.commentTime = new Date();
    }
}
</script>

<style scoped>
    .top{
        margin-top: 20px;
    }

    .start{
        text-align: center;
        margin-top: 20px;
    }

    .button{
        position: fixed;
        bottom: 0;
        width: 100%
    }
</style>
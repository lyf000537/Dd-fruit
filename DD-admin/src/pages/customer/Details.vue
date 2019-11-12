<template>
    <div class="customer_detail">
       <h2>顾客详情</h2>
       <el-button type="primary" size="small" @click="backHandler">返回</el-button>
        <el-table :data="customer" size="small">
            <el-table-column prop="username" label="用户名"></el-table-column>
            <el-table-column prop="realname" label="姓名"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column prop="telephone" label="电话号码"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            customer:[]
        }
    }
}
</script>
<style>
    
</style>
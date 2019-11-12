import {get,post} from "../../http/axios"

export default {
    namespaced: true,
    state: {
        categories:[],
        products:[]
    },
    mutations: {
        refreshCategories(state,categories){
            state.categories = categories
            // console.log(categories)
        },
        refreshProducts(state,products){
            state.products = products
        }
        
    },
    actions: {
        async findAllCategories(context){
            // 查询
            let response = await get("/category/findAll")
            // 将查询结果更新到state中
            context.commit("refreshCategories",response.data)
        },
        async findAllProducts(context,payload){
            let response = await post("/product/query",payload)
            // 为每个产品添加一个number属性
            response.data.list.forEach(item=>{
                item.number = 0;
            })
            context.commit("refreshProducts",response.data.list)
        }

    },
    
}


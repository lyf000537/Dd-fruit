import _ from 'lodash'
export default {
  namespaced:true,
  state:{
    orderLines:[]
  },
  getters:{
    // 计算购物车总额
    total(state){
      let total = 0;
      state.orderLines.forEach((item)=>{
        total += item.price * item.number
      })
      return total;
    }
  },
  mutations:{
    // 清空购物车
    clearShopcar(state){
      state.orderLines = [];
    },
    // 添加购物车
    //{productId,productName,price,number}
    addShopcar(state,orderLine){
      // 如果orderlines中有该产品，只需要更改数量即可，如果没有，直接push
      let flag = state.orderLines.some(item=>item.productId === orderLine.productId);
      if(flag){
        // 该number
        state.orderLines.forEach((item)=>{
          if(item.productId === orderLine.productId){
            item.number = orderLine.number;
          }
        })
      } else {
        state.orderLines.push(orderLine);
      }
     // state.orderLines.push(orderLine)
    }
  }
}
const state={
    items:[],
};

const mutations ={
    //添加商品到购物车中
    pushProductToCart(state,{id,imgUrl,title,price,quantity}){
        if(!quantity){
            quantity =1;
        }
        state.items.push({id,imgUrl,title,price,quantity});
    },

    //增加商品数量
    incrementItemQuantity(state,{id,quantity}){
        state.items.find(item=>item.id==id).quantity +=quantity;
    },
    //删除购物车商品
    deletCartItem(state,id){
        let index = state.items.findIndex(item=>item.id==id);
        state.items.splice(index,1);
    },
    //清空购物车
    setCartItems(state,{items}){
        state.items = items;
    },
};

const getters = {
    //计算所有的商品总价
    cartTotalPrice:(state)=>{
        return state.items.reduce((total,product)=>{
            return total+product.price*product.quantity
        },0)
    },
    //计算购物车中单项商品的价格,通过返回带参数的函数给getters传参
    cartItemPrice:(state)=>(id)=>{
        if(state.items.length>0){
            var cartitem = state.items.find(item=>item.id == id);
        }
        if(cartitem){
            return cartitem.price*cartitem.quantity;
        }
    },
    //获取购物车中商品的数量
    itemsCount:(state)=>{
        return state.items.length;
    }     
};

const actions = {
    //增加任意数量的商品到购物车
    addProductToCart({state,commit},{id,imgUrl,title,price,quantity,inventory}){
        if(inventory>0){
            var cartItem = state.items.find(item=>item.id==id);
        }
        if(!cartItem){
            commit('pushProductToCart',{id,imgUrl,title,price,quantity});
        }else{
            commit('incrementItemQuantity',{id,quantity});
        }

    },
};

export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}
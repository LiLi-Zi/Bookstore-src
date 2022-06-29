<template>
  <div class="shoppingCart">
    <table>
    <tr>
        <th></th>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>金额</th>
        <th>操作</th>
    </tr>
    <tr v-for="book in books" :key="book.id">
        <td><img :src="book.imgUrl"></td>
        <td>
            <router-link :to="'/book/'+book.id" target="_blank">{{book.title}}</router-link>
        </td>
        <td>{{book.price | currency}}</td>
        <td>
            <button @click="handleSubtract(book,$event)">-</button>
            {{book.quantity}}
            <button @click="handleAdd(book.id)">+</button>
        </td>
        <td>{{cartItemPrice(book.id) | currency}}</td>
        <td><button @click="deletCartItem(book.id)">删除</button></td>
    </tr>
    </table>
    <p><button @click="checkout" class="checkout">结算</button>
        <span>总价：{{cartTotalPrice | currency}}</span>
    </p>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
    name:"ShoppingCart",
    computed:{
        ...mapState('cart',{
            books:'items'
        }),
        //商品总结和单项商品总价（值为函数需要传参）
        ...mapGetters('cart',['cartTotalPrice','cartItemPrice']),
    },
    methods:{
        ...mapMutations('cart',['incrementItemQuantity','deletCartItem','pushProductToCart']),
       //调用vuex中添加此商品数量函数
        handleAdd(id){
            this.incrementItemQuantity({id,quantity:1});
        },
        //减少商品数量，当值为0时弹出消息框通过原生事件event参数把按钮设为disabled
        handleSubtract(book,event){
            if(book.quantity <= 1){
                event.target.disabled=true;
                //消息提示框的实现
                this.$msgBox.show({
                    title:'宁确定要删除商品吗',
                    cancel:'取消',
                    //必须使用箭头函数传值，否则this的指向会改变导致报错！！
                    handleOk:()=>{this.deletCartItem(book.id);},
                    handleCancel:()=>{ event.target.disabled = false;}

                });                
            }else{
                this.incrementItemQuantity({id:book.id,quantity:-1});
            }
        },
        checkout(){
            this.$router.push('/check');
        },
    },
}
</script>

<style scoped>
.shoppingCart {
  text-align: center;
  margin-left: 45px;
  width: 96%;
  margin-top: 70px;
}
.shoppingCart table {
  border: solid 1px black;
  width: 100%;
  background-color: #eee;
  
}
.shoppingCart th {
  height: 50px;
}
.shoppingCart th, .shoppingCart td {
  border-bottom: solid 1px #ddd;
  text-align: center;
}
.shoppingCart span {
  float: right;
  padding-right: 15px;
}
.shoppingCart img{
  width: 60px;
  height: 60px;
}
.shoppingCart .checkout{
    /*position: absolute;
    right: 0px;
    top: 0;*/
    float: right;
    width: 60px;
    height: 30px;
    margin: 0;
    border: none;
    color: white;
    background-color: red;
    cursor: pointer;
}
</style>
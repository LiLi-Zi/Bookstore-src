<template>
  <div class="bookListItem">
    <div>
        <img :src="item.bigImgUrl">
    </div>
    <p class="title">
        <router-link :to="{name:'book',params:{id:item.id}}" target="_blank">
        {{item.title}}
        </router-link>
    </p>
    <p>
        <span class="factPrice">
            {{item.price | factPrice(item.discount) | currency }}
        </span>
        <span>
            定价:<span class="price">{{item.price}}</span>
        </span>
    </p>
    <p>
        <span>{{item.author}}/</span>
        <span>{{item.publishDate}}/</span>
        <span>{{item.bookConcern}}</span>
    </p>
    <p>
        {{item.brief}}
    </p>
    <p>
        <el-button class="addCartButton" @click="addCartItem(item)"
          type="danger" size="medium">加入购物车</el-button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"BookListItem",
    props:{
        item:{
            type:Object,
            default:()=>{}
        }
    },
    methods:{
        ...mapActions('cart',{//this.addCart() == this.$store.dispatch('addproductToCart')
            addCart:'addProductToCart',
        }),
        factprice(price,discount){
            return price*discount
        },
        addCartItem(item){
            let quantity =1;
            let newItem = {
                ...item,
                price:this.factprice(item.price,item.discount),
                quantity
            };
            this.addCart(newItem);
            this.$router.push('/cart');
        }
    },
}
</script>

<style scoped>
    .price{
        text-decoration-line: line-through;
        font-style: italic;
        color:rgb(96, 98, 99);
        margin-left: 0;
    }

.bookListItem {
  border-bottom: solid 1px #ccc;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  overflow: hidden;
  position: relative;
}
.bookListItem p{
  text-align: left;
}
.bookListItem p span{
  margin-left: 10px;
}
.bookListItem img{
  width: 180px;
  height: 180px;
  float: left;
}
 .addCartButton{
  position: absolute;
  bottom: 5px;
}


.bookListItem .factPrice{
  color: red;
  font-weight: bold;
}
.bookListItem .title{
  color: #e00;
}
</style>
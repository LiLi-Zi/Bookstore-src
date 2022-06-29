<template>
  <div class="headercart">
    <a href="javascript:;" @click.prevent="handleCart">
        <span>购物车 {{cartItemsCount}}</span>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'HeaderCart',
    data(){
        return {}
    },
    computed:{
        ...mapGetters('cart',{
            cartItemsCount:'itemsCount'
        }),//this.$store.getters['cart/itemCount']
    },
    methods:{
        handleCart:function(){
            this.$router.push('/cart');
        },
    }
}
</script>
    
<style>
    .headercart {
        /* display: inline-block; */
        margin-left: 50px;
        margin-right: 50px;
       
    }
    .headercart a {
        padding: 5px 10px;
        display: block;
        background-color: black;
        color: white;
        text-decoration: none;
        font-size: 1rem;
        
    }
</style>
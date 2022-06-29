<template>
<div class="container">
  <div class="header">
    <section>购书商城</section>
    <HeaderSearch/>
    <HeaderCart/>
    <span v-if="!user">你好，请<router-link to="/login">登录</router-link>
    免费<router-link to="/register">注册</router-link>
    </span>
    <span v-else> 欢迎您，{{user.username}},
    <a href="javascript:;" @click.prevent="logout">退出登录</a></span>
  </div>
</div>
</template>

<script>
import HeaderCart from './HeaderCart.vue'
import { mapState , mapMutations } from 'vuex'
import HeaderSearch from './HeaderSearch.vue'


export default {
    name:'Header',
    data(){
        return{}
    },
    components: { HeaderSearch, HeaderCart },
    computed:{
        ...mapState('user',['user'])//this.$store.state.user['user']
    },
    methods:{
        logout:function(){
            this.deleteUser();//this.$store.commit('user/deleteUser')
        },
        ...mapMutations('user',['deleteUser']),
    }
}
</script>

<style>
    .container{
        position: relative;
        min-height: 60px;
    }
    .header{
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        min-width: 1050px;
        
    }
    .header>*{
        flex:none;

    }
    .header h1{
        display: inline-block;
        height: 50px;
    }
    .header section{
        font-size: 2rem;
        font-weight: bold;
    }
</style>
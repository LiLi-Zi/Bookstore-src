<template>
  <div class="menus">
    <ul>
        <li>
            <router-link to="/home">首页</router-link>
        </li>
        <li>
            <router-link to="/newBooks">新书</router-link>
        </li>
        <li><a href="javascript:;">特价书(#)</a></li>
        <li><a href="javascript:;">教程</a></li>
        <li><a href="javascript:;">试听教程</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Menus',
}
</script>

<style>
    .menus{
        overflow: hidden;
    }
    .menus ul{
        
        display: flex;
        background-color: black;
        height: 50px;
        justify-content: center;
    }

    .menus li{
       
        display: inline-block;
        flex:1;
        list-style: none;
        border-right: 1px solid white;
        
    }
    .menus li a:hover{
        background-color: rgb(37, 108, 180);
    }
    .menus li a{
        display: inline-block;
        background-color: black;
        color: aliceblue;
        font-size: 1.5rem;
        text-decoration: none;
        height: 50px;
        text-align: center;
        line-height: 50px;
        width: 100%;
        
    }
</style>
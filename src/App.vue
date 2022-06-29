<template>
  <div id="app">
    <Header/>
    <Menus/>
    <router-view/>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Menus from './components/Menus.vue'



export default{
  
  components:{
    Header,
    Menus,
   
  },

}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

/* #app{
  position: absolute;
} */

.homecontainer {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.price{
  color: rgb(78, 79, 80);
  font-style: italic;
  text-decoration-line: line-through;
}
</style>

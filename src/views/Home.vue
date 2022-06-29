<template>
  <div>
   <div class="homecontainer">
     <HomeCategory/>
     <HomeScrollPic/>
     <HomeBooksHot/>
     
    </div>
    <BooksNew/>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeCategory from '../components/HomeCategory.vue'
import HomeScrollPic from '../components/HomeScrollPic.vue'
import HomeBooksHot from '../components/HomeBooksHot.vue'
import BooksNew from '../components/BooksNew.vue'

export default {
  name: 'home',
  components: {
    HomeCategory,
    HomeScrollPic,
    HomeBooksHot,
    BooksNew
}
}
</script>

<style>
.homecontainer{
  margin-top:10px;
}
</style>
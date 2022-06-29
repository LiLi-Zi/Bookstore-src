<template>
  <div>
  <div v-for="book in list" :key="book.id">
    <book-list-item :item="book"></book-list-item>
  </div>
  </div>
</template>

<script>
import BookListItem from './BookListItem.vue'
export default {
name:"BookLIst",
props:{
    list:{
        type:Array,
        default:()=>[],
    },
},
components: { BookListItem },

}
</script>

<style>

</style>
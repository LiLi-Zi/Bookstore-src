<template>
  <div class="booksNew">
    <h3>新书上市</h3>
    <div class="bookcontainer">
        <div class="book" v-for="book in books" :key="book.id">
            <figure><!--文档中插图图像 -->
                <router-link :to="'/book/'+book.id">
                    <img :src="book.imgUrl">
                    <figcaption><!--图像标题-->
                        {{book.title}}
                    </figcaption>
                </router-link>
            </figure>
            <p> {{ book.price | factPrice(book.discount) | currency }}
            <span class="price">{{book.price | currency }}</span>
            </p>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            books:[],
        }
    },
    created(){
        this.axios.get('/book/new')
            .then(respone=>{
                if(respone.status==200){
                    this.books = respone.data;
                 }
            })
            .catch(error => alert(error));
    },
}
</script>

<style>
    .booksNew{
        text-align: center;
        margin-top: 10px;
        overflow: hidden;
        padding-top: 10px;
        width:100%;
        
    }
    .booksNew .bookcontainer{
        display: flex;
        padding-top: 20px;
        
    }

    .booksNew .book {
        flex:auto;
        border-left: 1px dashed grey;
        
    }
</style>
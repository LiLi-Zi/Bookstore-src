<template>
  <div class="bookrecommend">
    <h3>热门推荐</h3>
    <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/'+book.id">
            <el-link type="primary">{{book.title}}
            <span>{{book.price | factPrice(book.discount) |currency  }}</span>
            </el-link>
        </router-link>
    </li>
  </div>
</template>

<script>


export default {
    name:'HomeBooksHot',
    data(){
        return{
            books:[],
        }
    },
    created(){
        this.axios.get('/book/hot')
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
    .bookrecommend{
        flex:auto;
        text-align: center;
        border: 1px solid black;
        box-shadow: 10px 10px 5px grey;
        margin-left: 20px;
        height: 220px;
    }
    .bookrecommend li{
        list-style: none;
        padding: 10px 0px 0px 0px;
    }
    .bookrecommend li a {
        text-decoration: none;
    }
</style>
<template>
  <div class="category">
    <h3>图书分类</h3>
    <div v-for="category in categories" :key="category.id">
        <h4>{{category.name}}</h4>
        <router-link v-for="child in category.children" :key="child.id"
        :to="'/category/'+child.id">
        <el-link type="primary">{{child.name}}</el-link>
        </router-link>

    </div>
  </div>
</template>

<script>
export default {
    name:'HomeCategory',
    data(){
        return{
            categories:[],
        }
    },

    created(){
        this.axios.get('/category')
            .then(response=>{
                if(response.status == 200){
                    this.categories = response.data;
                    // console.log(response);
                }
            })
            .catch(error=>alert(error));
    },
}
</script>

<style>
    .category{
        flex: auto;
        text-align: center;
        border: 1px solid black;
        box-shadow: -10px 10px 5px grey;
        margin-right: 20px;
        height: 220px;
    }
    .category a{
        padding: 10px 5px 0px 0px;
        
        text-decoration: none;
    }
    .category>div{
        padding: 10px 10px 0px 10px;
    }
</style>
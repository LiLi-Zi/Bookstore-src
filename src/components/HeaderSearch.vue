<template>
  <div class="headersearch">
    <input type="text" v-model.trim="keyword">
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
    name:'HeadSearch',
    data(){
        return {
            keyword:'',
        }
    },
    methods:{
        search:function(){
            if(this.$route.query.wd != this.keyword){
                this.$router.push({path:'/search',query:{wd:this.keyword}});
            }
        }
    },
}
</script>

<style>
    .headersearch{
        /* display: inline-block; */
         margin-left: 50px;
         border: 1px solid black;
         height: 30px;
         width:500px ;

    }
    .headersearch input{
        float: left;
        height: 30px;       
        border: none;
        width: 80%;
        
    }
    .headersearch button{
        float: left;
        height: 30px;  
        background-color:black;
        color: white;
        border:none;
        width: 20%;
        font-size: 1rem;
        cursor: pointer;
        
    }
</style>
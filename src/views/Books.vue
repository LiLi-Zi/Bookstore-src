<template>
  <div class="books">
    <loading v-if="loading"/>
    <h3 v-else>{{title}}</h3>
    <BookList :list="books" />
    <h1>{{message}}</h1>
    <!-- 使用element-ui实现分页功能 -->
    <div class="block">
    <el-pagination 
                            
        layout='total,sizes,prev,pager,next,jumper'     
        @size-change="handleSizeChange"
        :page-sizes="[2,10,20,40]"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="pageSize"
        :total="total"
    >
    </el-pagination>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import BookList from '../components/BookList.vue'

export default {
    name:"Books",
    components: { Loading, BookList },
    data(){
        return{
            title:'',
            books:[],
            message:'',
            loading:true,
            //分页相关数据
            total:5,
            pageNum:1,
            pageSize:2,
        }
    },
    methods:{
        setRequestUrl(path){// 判断路径来自分类还是搜索，分类的接口要加上/book
            let url =path;
           
            if(path.indexOf('/category') != -1){
                url = '/book'+url+'/page';
            }
            return url
        },
        getBooks(url,pageNum,pageSize){//异步请求后台数据
            this.message='';
            this.axios.get(url,{params:{pageNum,pageSize}})
                .then(response=>{
                    if(response.data.code == 200){
                        this.loading=false;
                        this.books = response.data.data;
                        this.total = response.data.total;
                    
                    if(this.books.length == 0){
                        if(this.$route.name=='category'){
                            this.message="当前分类下没有图书";
                        }else{
                            this.message="没有搜索到匹配图书";
                            }
                        } 
                    } 
                })
                .catch(error=>alert(error));
        },
    
        //当修改了每页显示的条数时，重新请求数据
        handleSizeChange(size){
            this.pageSize = size;
            let url = this.setRequestUrl(this.$route.fullPath);
            this.getBooks(url,this.pageNum,this.pageSize);
        },
        //当用户切换了某一页时，重新请求数据
        handleCurrentChange(current){
            this.pageNum=current;
            let url = this.setRequestUrl(this.$route.fullPath);
            this.getBooks(url,this.pageNum,this.pageSize);
        },
    },
    
        beforeRouteEnter(to,from,next){//采用组件内导航，next传入vm实例在导航确认后调用回调函数，也可以用created加载初始数据
            console.log('进入');
            next(vm=>{
                vm.title = to.meta.title;
                console.log('执行');
                let url = vm.setRequestUrl(to.fullPath);
                console.log('2');
                vm.getBooks(url,vm.pageNum,vm.pageSize);
                console.log('3');
            });
        },
        // created(){
        //     console.log('1');
        //     this.title = this.$route.meta.title;
        //     let url = this.setRequestUrl(this.$route.fullPath);
        //     this.getBooks(url,this.pageNum,this.pageSize); 
        //     console.log('执行');
        // },
        beforeRouteUpdate(to,from,next){//搜索途径可能会复用组件所以需要监听路由变化
            let url = this.setRequestUrl(to.fullPath);
            this.getBooks(url,this.pageNum,this.pageSize);
            next();
        },
}
</script>

<style>
    .books h3{
        text-align: center;
        margin: 10px auto;
    }

    .books .block{
        text-align: center;
    }
</style>
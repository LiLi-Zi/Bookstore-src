<template>
  <div>
    <h3>{{message}}</h3>
    <book-comment-list-item v-for="comment in comments"  :item="comment"
    :key="comment.id"></book-comment-list-item>
  </div>
</template>

<script>
import BookCommentListItem from './BookCommentListItem.vue'
export default {
    name:'BookCommentList',
    data(){
        return{
            message:'',
            comments:[],
        }
    },
    components: { BookCommentListItem },
    created(){
        this.message = '';
        let url = this.$route.fullPath + '/comment';
        console.log(url);
        this.axios.get(url)
            .then(response=>{
                if(response.status == 200){
                    this.comments = response.data;
                }
                if(response.data.length == 0){
                    this.message = "当前没有评论";
                }
            })
            .catch(error=>alert(error));
    },

}
</script>

<style>

</style>
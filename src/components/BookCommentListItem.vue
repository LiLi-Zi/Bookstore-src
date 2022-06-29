<template>
  <div class="bookCommentListItem">
    <div>
        <span>{{item.username}}</span>
        <span>{{item.commentDate | formatTime }}</span>
        <div>{{item.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'BookCommentListItem',
    props:{
        item:{
            type:Object,
            default:()=>{},
        },
    },
}
</script>

<style>

</style>
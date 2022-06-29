<template>
<div class="modal">
  <div class="messageBox">
    <h2>{{title}}</h2>
  <div>
    <button class="ok" @click="handleOk">{{ok}}</button>
    <div class="cancel" @click="handleCancel" v-if="cancel">{{cancel}}</div>
  </div>
  </div>
</div>
</template>

<script>
export default {
    name:'MessageBox',
    props:[""],
    data(){
        return{
            title:'',
            ok:'',
            cancel:'',
        }
    },
    // methods:{
    //     handleOk(){},
    //     handleCancel(){},
    // }
}
</script>

<style scoped>

.modal{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(41, 38, 38,0.3);
  z-index: 1001;
  
}
.messageBox {
  z-index: 1002;
  
  width: 220px;
  height: 140px;
  border: solid 1px #ccc;
  border-radius: 4px;
  background: white;;
  box-shadow: 0px 1px 2px 2px #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -70px 0 0 -110px;
  text-align: center;
}
.messageBox h2 {
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
.messageBox > div {
  display: flex;
  position: absolute;
  bottom: 20px;
  line-height: 30px;
  width: 100%;
  text-align: center;
}
.messageBox .ok, .messageBox .cancel{
  display: block;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  border: solid 1px #ccc;
  width: 40%;
  background-color: #eee;
  cursor: pointer;
  border-radius: 2px;
}
</style>
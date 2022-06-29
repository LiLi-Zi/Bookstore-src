<template>
  <div class="addSubtractButton">
    
    <input type="number" v-model="quantity" min="0" >
   
    <div>
        <button @click.prevent="handleadd" >+</button>
        <button @click.prevent="handlesub" :disabled="quantity==0">-</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'AddSubtractButton',
    data(){
        return{
            quantity:0,
        }
    },
    methods:{
        handleadd:function(){
            this.quantity++;
            this.$emit('updateQuantity',this.quantity);
        },
        handlesub:function(){
            
            this.quantity--;
            this.$emit('updateQuantity',this.quantity);
        }
    },
    computed:{
        keyid:function(){
            return this.$route.fullPath
        }
    }
}
</script>

<style scoped>
.addSubtractButton input{
  height: 30px;
  width: 30px;
  float: left;
  text-align: center;
} 
.addSubtractButton div{
  width: 15px;
  height: 30px;
  float: left;
  margin: 0;
  padding: 0;
  
}
.addSubtractButton a{
  text-align: center;
  vertical-align: middle;
  height: 16px;
  width: 16px;
  background-color: #ccc;
  text-decoration: none;
  border: solid 1px gray;
  display: inline-block;
  margin: 0;
  padding: 0;
  outline: none;
} 
.addSubtractButton a.add{
  margin-top: -1px;
  color: black;
}
.addSubtractButton a.sub{
  margin-top: -3px;
  border-top: none;
}
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
.disabled { 
  pointer-events: none; 
  color: gray; 
  cursor: default;
}
.actived{
  color: black;
}
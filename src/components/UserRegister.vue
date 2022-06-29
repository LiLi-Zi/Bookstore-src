<template>
  <div class="register">
        <form>
            <div class="lable">
                <label class="error">{{message}}</label>
                <input name="username" type="text" 
                placeholder="请输入用户名" v-model.trim="username">
                <input name="password" type="password" 
                placeholder="请输入密码" v-model.trim="password">
                <input name="password2" type="password" 
                placeholder="请输入确认密码" v-model.trim="password2">
                <input name="tel" type="tel" 
                placeholder="请输入手机号" v-model.trim="mobile"> 
            </div>
            <div class="submit">
                <input type="submit" value="注册" @click.prevent="register">
            </div>
        </form>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    name:'UserRegister',
    data(){
        return{
            username:'',
            password:'',
            password2:'',
            mobile:'',
            message:'',
        }
    },
    methods:{
        //vuex中的保存用户数据方法
        ...mapMutations('user',['saveUser']),
        //注册方法
        register(){
            this.message = '';
            //表单输入判断
            if(!this.checkForm()){ return }
            //表单验证发送post请求
            this.axios.post('/user/register',
                {username:this.username,password:this.password,mobile:this.mobile})
                .then(response=>{
                    //如果请求成功
                    if(response.data.code == 200){
                        this.saveUser(response.data.data);
                        this.username="";
                        this.password='';
                        this.password2='';
                        this.mobile='';
                        //注册成功回到主页
                        this.$router.push('/');
                    }else if(response.data.code == 500){
                        this.message = '用户注册失败';
                    }
                })
                .catch(error=>alert(error.message));
        },
        //表单输入判断函数
        checkForm(){
            //字段不能为空判断
            if( !this.username || !this.password || !this.password2 || !this.mobile ){
                this.$msgBox.show({title:'所有输入字段不能为空'});
                return false
            }
            //两次密码输入一致判断
            if(this.password != this.password2){
                this.$msgBox.show({title:'密码和确认密码必须相同'});
                return false
            }
            return true;
        },
        cancelRequest(){
            if(typeof(this.cancel) == 'function'){
                this.cancel('终止请求');
            }
        },

    },
    //当用户输入用户名时，实时的检测用户名是否存在
    watch:{
        username:function(newVal){
            // 取消上一次的请求
            if(newVal){
                this.cancelRequest();
            }
            this.axios.get('/user/'+newVal,{
                cancelToken: new this.axios.CancelToken(
                    cancel=>this.cancel = cancel
                )
            }
            )
            .then(response=>{
                if(response.data.code == 200){
                    let isExist = response.data.data;
                    if(isExist){
                        this.message='该用户已存在';
                    }else{
                        this.message = '';
                    }
                }
            })
            .catch(error=>{
                if(this.axios.isCancel(error)){//如果请求是被取消产生的错误，输出取消请求的原因
                    console.log('请求取消',error.message);
                }else{
                    console.log(error);
                }
            });
        },
    },

}
</script>

<style scoped>
.register {
  margin: 5em auto 0;
  width: 44%;
}
.register input {
  padding: 15px;
  width: 94%;
  font-size: 1.1em;
  margin: 18px 0px;
  color: gray;
  float: left;
  cursor: pointer;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: none;
  font-weight: 600;
  margin-left: 3px;
  background: #eee;
  transition: all 0.3s ease-out;
  border: solid 1px #ccc;
}
.register input:hover {
  color: rgb(180, 86, 9);
  border-left: solid 6px #40A46F;
}
.register .submit {
  padding: 5px 4px;
  text-align: center;
}
.register input[type="submit"] {
  padding: 17px 17px;
  color: #fff;
  float: right;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #40a46f;
  border: solid 1px #40a46f;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.5s ease-out;
  outline: none;
  width: 100%;
}
.register .submit input[type="submit"]:hover {
  background: #07793d;
  border: solid 1px #07793d;
}
.register .error{
  color: red;
  font-weight: bold;
  font-size: 1.1em;
}

</style>
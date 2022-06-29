<template>
  <div class="login">
  <div class="error">{{message}}</div>
  <form>
    <div class="lable">
        <input type="text" name="username" v-model.trim="username" 
            placeholder="请输入用户名">
        <input name="password" type="password" 
                placeholder="请输入密码" v-model.trim="password">    
    </div>
    <div class="submit">
        <input type="submit" @click.prevent="login" value="登录">
    </div>
  </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'UserLogin',
    data(){
        return{
            username:'',
            password:'',
            message:'',
        }
    },
    methods:{
        ...mapMutations('user',['saveUser']),
        //检查输入是否为空
        checkForm(){
            if(!this.username || !this.password){
                this.$msgBox.show({title:'用户名和密码不能为空'});
                return false
            }else{
                return true
            }
        },
        login(){
            this.message='';
            if(!this.checkForm()){ return }
            this.axios.post('/user/login',
                {username:this.username,password:this.password})
                .then(response=>{
                    if(response.data.code == 200){
                        //请求成功则更改vux中的user数据
                        this.saveUser(response.data.data);
                        this.username='';
                        this.password='';
                        //弹出消息框并设置点击确认后的路由跳转
                        //（如果请求前有传入redirect参数则重定向到此路径，否则返回主页）
                        this.$msgBox.show({
                            title:'登录成功',
                            //传入点击确定的回调函数，注意使用箭头函数,this指向当前实例
                            handleOk:()=>{
                                if(this.$route.query.redirect){
                                    let redirect = this.$route.query.redirect;
                                    this.$router.replace(redirect);
                                }else{
                                    this.$router.replace('/');
                                }
                            },
                        });
                        //判断如果返回码为400和500时，页面上显示错误提示
                    }else if(response.data.code == 400){
                        this.message = '用户名和密码错误';
                    }else if(response.data.code == 500){
                        this.message = '用户登录失败';
                    }
                })
                .catch(error=>alert(error.message));
        },
    },
}
</script>

<style scoped>
.login {
  margin: 5em auto 0;
  width: 44%;
}
.login input{
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
.login input:hover{
  color: rgb(180, 86, 9);
  border-left: solid 6px #40A46F;
}
.login {
  padding: 5px 4px;
  text-align: center;
}
input[type="submit"] {
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
.submit input[type="submit"]:hover {
  background: #07793d;
  border: solid 1px #07793d;
}
.login .error{
  color: red;
  font-weight: bold;
  font-size: 1.1em;
}
</style>
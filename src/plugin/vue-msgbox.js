import MessageBox from './MessageBox.vue'

const msgBox={};
//插件的定义方式：insatll方法（第一个参数为Vue）会在Vue.use时暴露，
//插件的开发有四种方式，本例采用Vue.prototype.$method = method;
msgBox.install = function(Vue){
    Vue.prototype.$msgBox =msgBox;
    //定义被调用的msgBox.show方法,采用立即执行函数和闭包函数，返回一个对外接口
    msgBox.show = (function(){
        //定义默认值，采用闭包的方式很高级？
        let defaults ={
            title:'',
            ok:'确定',
            cancel:'',
            handleOk:function(){},
            handleCancel:function(){},
        };
        //创建一个vue实例构造器MessageBoxImpl
        let MessageBoxImpl = Vue.extend(MessageBox);

        //返回一个带参数的接口函数，即调用this.$mesBox.show(opts)时需要传入配置参数opts
        return function(opts){
            //替换默认值
            for(let attr in opts){
                defaults[attr] = opts[attr];
            }
            //创建vue实例
            const vm = new MessageBoxImpl({
                el:document.createElement('div'),//创建组件挂载的根元素
                data(){
                    return{
                        title:defaults.title,
                        ok:defaults.ok,
                        cancel:defaults.cancel,
                    }
                },
                methods:{
                    handleOk(){
                        //通过绑定this调用defaults里面的方法，这里的this指向vm实例
                        //这里传过来的时箭头函数没所以绑定this并不会改变指向，handleOk（）调用也是一样的
                        defaults.handleOk.call(this);
                        //点击确认按钮后会删除提示框
                        document.body.removeChild(vm.$el);//this.$el
                    },
                    handleCancel(){
                        
                        defaults.handleCancel.call(this);
                        document.body.removeChild(this.$el);

                    },
                },
            });
            //将组件绑定的根元素添加到html body内，
            document.body.appendChild(vm.$el);
        }
    })();

}

export default msgBox;
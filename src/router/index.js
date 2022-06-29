import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

// 解决vue-router 3.1.0及之后版本，
// 在路由跳转时浏览器控制台报“Uncaught (in promise)”的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) 
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/home',
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        title:'首页',
      },
      component:Home,
    },
    {
      path:'/category/:id',
      name:'category',
      meta:{
        title:'分类图书',
      },
      component:()=>import('../views/Books.vue'),
    },
    {
      path:'/search',
      name:"search",
      meta:{
        title:'搜索结果',
      },
      component:()=>import('../views/Books.vue'),
    },
    {
      path:'/newBooks',
      name:"newBooks",
      meta:{
        title:'新书上市',
      },
      component:()=>import('../components/BooksNew.vue'),
    },
    {
      path:'/book/:id',
      name:'book',
      meta:{
        title:'图书',
      },
      component:()=>import('../views/Book.vue'),
    },
    {
      path:'/cart',
      name:'cart',
      meta:{
        title:'购物车',
        requiresAuth:true,
      },
      component:()=>import('../views/ShoppingCart.vue'),
    },
    {
      path:'/check',
      name:'check',
      meta:{
        title:'结算',
        requiresAuth:true,
      },
      component:()=>import('../views/Checkout.vue'),
    },
    {
      path:'/register',
      name:'register',
      meta:{
        title:'注册',
      },
      component:()=>import('../components/UserRegister.vue'),
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录',
      },
      component:()=>import('../components/UserLogin.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
});

//全局前置守卫判断页面用户（是否登录）是否有权限进入
router.beforeEach((to,from,next)=>{
  //判断页面是否需要登录
  if(to.matched.some(record=>record.meta.requiresAuth)){//to.matched包含了所有嵌套路径
    //判断用户是否已经登录
    if(store.state.user.user){//已经登录
      next();
    }else{//未登录
      next({name:'login',query:{redirect:to.fullPath}})
    }
  }else{
    next();
  }
});

//全局后置导航守卫设置跳转页面的标题
router.afterEach((to)=>{
  document.title = to.meta.title;
});


export default router;
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
//在store中储存的信息，在刷新浏览器窗口时会被重置，使用locaStorage与store同步数据
//第三方插件vuex-persistedstate来解决这个问题
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    cart,
    user,
  },
  plugins:[createPersistedState()]
})

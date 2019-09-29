/**
 * Created by Administrator on 2019/9/25/025.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import component from './modules/component'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user,
    component
  },
  getters
})
export default store

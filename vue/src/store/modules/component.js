/**
 * Created by Administrator on 2019/9/26/026.
 */
const state = {
  clickItem:[],
  setDle:'测试一',
}

const mutations = {
  SET_ITEM:(state,item)=>{
    state.clickItem = item
  },
  SET_DLE:(state,item)=>{
    state.setDle = item
  }
}

const actions = {
  setItem(context,item){
    context.commit('SET_ITEM',item)
  },
  setDle(comtext,item){
    comtext.commit('SET_DLE',item)
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}


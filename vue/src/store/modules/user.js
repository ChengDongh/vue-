/**
 * Created by Administrator on 2019/9/25/025.
 */
import { getToken, setToken } from '@/utils/auth'

const state = {
  token:getToken(),

}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}
const actions = {
  setToken({commit},token){
    return new Promise(reslove => {
      commit('SET_TOKEN',token)
      setToken(token)
      reslove()
    })
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}

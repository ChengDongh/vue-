/**
 * Created by Administrator on 2019/9/25/025.
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials:true  // send cookies when cross-domain requests
  timeout:5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.headers['token'] = store.getters.token
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response =>{
    const res = response;
    if(res.data.code === '404'){
        Message({
          message:'404',
          type:'error',
          duration: 5 * 1000
        })
    }
    return res
  },
  error => {
    console.log('err' + error);
    Message({
      message:error.message,
      type:'error',
      duration:5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service


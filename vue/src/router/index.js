import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// const componentsLeft = ()=>import('@/components/componentsLeft')
// const componentsRight = ()=>import('@/components/componentsRight')

const Index = ()=>import('@/views/index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        name:'测试一',
        requiresAuth: true , //权限
        keepAlive:true //组件缓存
      }
    }
  ]
})


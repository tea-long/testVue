import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import Public from '@/components/Public'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'first',
    //   component: first
    // },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
 
    {
      path: '/',
      name: 'Public',
      component: Public
    },
  ]
})

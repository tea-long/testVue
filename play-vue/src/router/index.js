import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/common/Home'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      //也可先引入路径，再配置组件
      // component:Home,
      meta: { title: '自述文件' },
      children:[
          {
              path: '/internet',
              component: resolve => require(['../components/page/Internet.vue'], resolve),
              meta: { title: 'IT互联' }
          },
          {
              path: '/film',
              component: resolve => require(['../components/page/Film.vue'], resolve),
              meta: { title: '电影' }
          },
          {
              path: '/students',
              component: resolve => require(['../components/page/Students.vue'], resolve),
              meta: { title: '中小学生' }
          },
          {
              path: '/music',
              component: resolve => require(['../components/page/Music.vue'], resolve),
              meta: { title: '音乐' }
          },
          {
              path: '/public',
              component: resolve => require(['../components/page/Public.vue'], resolve),
              meta: { title: '通用' }
          },
        ]
      }

  ]
})

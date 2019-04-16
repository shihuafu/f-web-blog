import Vue from 'vue'
import Router from 'vue-router'
// 导入组件
import HomePage from '@/components/HomePage'  // @是什么意思？？
import AddBlog from '@/components/AddBlog' 
import About from '@/components/About' 
import ReadBlog from '@/components/ReadBlog' 

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/add-blog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/read-blog/:id',
      name: 'ReadBlog',
      component: ReadBlog
    },
  ]
})

// <router-view/>

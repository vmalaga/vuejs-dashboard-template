import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Users from '@/components/Users'
import Tables from '@/components/Tables'
import Tools from '@/components/Tools'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      alias: '/home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users_view',
      component: Users
    },
    {
      path: '/tables',
      name: 'Tables_view',
      component: Tables
    },
    {
      path: '/tools',
      name: 'Tools_view',
      component: Tools
    },
    {
      path: '/about',
      name: 'About_view',
      component: About
    }
  ]
})

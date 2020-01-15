import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import service from '@/components/services'
import contact from '@/components/contact'
import details from '@/components/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       name: 'home',
       component: home
    },
    
    {
    	path:'/blog',
        name:'blog',
        component:blog
    },

    {
    	path:'/services',
        name:'service',
        component:service
    },

    {
    	path:'/contact',
        name:'contact',
        component:contact
    },
     {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }

  ]
})

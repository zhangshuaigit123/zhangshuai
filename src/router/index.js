import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '@/components/content'
import sousuo from '@/components/sousuo'
import hongmi from '@/components/banner_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/hongmi',
      name: 'hongmi',
      component: hongmi
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import banner from '@/components/banner'
import tab from '@/components/tab'
import bannerDetail from '@/components/bannerDetail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/a',
      redirect: '/banner'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner,
      children: [{
        path: 'bannerDetail',
        name: 'bannerDetail',
        component: bannerDetail
      }]
    },
    {
      path: '/tab/:id',
      name: 'tab',
      component: tab
    }
  ]
})

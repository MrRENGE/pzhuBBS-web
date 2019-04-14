import Vue from 'vue'
import Router from 'vue-router'
import Navigationbar from '@/components/Navgationbar'
import page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: page
    }
  ]
})

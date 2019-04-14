import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutMe from '@/components/AboutMe'
import Bengoshi from '@/components/Bengoshi'
import BengoshiComment from '@/components/BengoshiComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/bengoshi',
      name: 'Bengoshi',
      component: Bengoshi
    },
    {
      path: '/bengoshi/comment/:articleId',
      name: 'BengoshiComment',
      component: BengoshiComment
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Name from '@/components/Name'
import JavaScript from '@/components/JavaScript'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/name',
      name: 'name',
      component: Name
    },
    {
      path: '/javaScript',
      name: 'javaScript',
      component: JavaScript
    }
  ]
})

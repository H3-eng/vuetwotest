import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Name from '@/components/Name'
import arrayDataPro from '@/components/JavaScript/arrayDataPro'
import conditionalJudgement from '@/components/JavaScript/conditionalJudgement'

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
      path: '/arrayDataPro',
      name: 'arrayDataPro',
      component: arrayDataPro
    },
    {
      path: '/conditionalJudgement',
      name: 'conditionalJudgement',
      component: conditionalJudgement
    }
  ]
})

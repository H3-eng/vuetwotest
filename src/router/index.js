import Vue from 'vue'
import Router from 'vue-router'
import RouterModule from './modules'
import HelloWorld from '@/components/HelloWorld'
import Name from '@/components/Name'
import arrayDataPro from '@/components/JavaScript/arrayDataPro'
import stringDataPro from '@/components/JavaScript/stringDataPro'
import objDataPro from '@/components/JavaScript/objDataPro'
import conditionalJudgement from '@/components/JavaScript/conditionalJudgement'
import taobaoImage from '@/components/taobao/taobaoImage'
import sgui from '@/components/componentLibrary/sgui'
import Constructors from '@/components/JavaScript/Constructors'
Vue.use(Router)

export default new Router({
  routes: [
    ...RouterModule,
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
      path: '/stringDataPro',
      name: 'stringDataPro',
      component: stringDataPro
    },
    {
      path: '/objDataPro',
      name: 'objDataPro',
      component: objDataPro
    },
    {
      path: '/conditionalJudgement',
      name: 'conditionalJudgement',
      component: conditionalJudgement
    },
    {
      path: '/taobaoImage',
      name: 'taobaoImage',
      component: taobaoImage
    },
    {
      path: '/sgui',
      name: 'sgui',
      component: sgui
    },
    {
      path: '/Constructors',
      name: 'Constructors',
      component: Constructors
    }
  ]
})

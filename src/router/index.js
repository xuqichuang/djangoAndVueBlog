import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/'
import login from '@/page/login/'
import wonderful from '@/page/wonderful/'
import wonIndex from '@/page/wonderful/wonIndex'
import wonDesc from '@/page/wonderful/wonDesc'
import articleTag from '@/page/wonderful/articleTag'
import study from '@/page/study/'
import studyIndex from '@/page/study/studyIndex'
import studyDesc from '@/page/study/studyDesc'
import live from '@/page/live/'
import liveIndex from '@/page/live/liveIndex'
import liveDesc from '@/page/live/liveDesc'
// import articleTag from '@/page/articleTag/'
import aboutMe from '@/page/aboutMe/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/wonderful',
      component:wonderful,
      children:[
        {
          path:'/',
          component:wonIndex,
        },
        {
          path:'article/:id',
          name:'wonDesc',
          component:wonDesc,
        },
        {
          path:'tag/:id',
          name:'articleTag',
          component:articleTag,
        }
      ]
    },
    {
      path:'/study',
      component:study,
      children:[
        {
          path:'/',
          component:studyIndex,
        },
        {
          path:'article/:id',
          name:'studyDesc',
          component:studyDesc,
        }
      ]
    },
    {
      path:'/live',
      component:live,
      children:[
        {
          path:'/',
          component:liveIndex,
        },
        {
          path:'article/:id',
          name:'liveDesc',
          component:liveDesc,
        }
      ]
    },
    {
      path:'/aboutMe',
      name:'aboutMe',
      component:aboutMe
    }
  ]
})

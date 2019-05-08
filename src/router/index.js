import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import today from '@/pages/today'
import rank from '@/pages/rank'
import index from '@/pages/index'
import tagindex from '@/pages/tagindex'
import player from '@/pages/player'
import aboutus from '@/pages/aboutus'
import aboutshotcut from '@/pages/aboutshotcut'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/today',
      name: 'today',
      component: today
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/tagindex',
      name: 'tagindex',
      component: tagindex
    },
    {
      path: '/player',
      name: 'player',
      component: player
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/aboutshotcut',
      name: 'aboutshotcut',
      component: aboutshotcut
    }
  ]
})

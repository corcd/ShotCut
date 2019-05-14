import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import today from '@/pages/today'
import rank from '@/pages/rank'
import fashion from '@/pages/fashion'
import punchline from '@/pages/punchline'
import playlet from '@/pages/playlet'
import index from '@/pages/index'
import player from '@/pages/player'
import aboutus from '@/pages/aboutus'
import about from '@/pages/about'
import search from '@/pages/search'
import test from '@/pages/test'
import testplayer from '@/pages/testplayer'
import exportJSON from '@/pages/exportJSON'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
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
      path: '/fashion',
      name: 'fashion',
      component: fashion
    },
    {
      path: '/punchline',
      name: 'punchline',
      component: punchline
    },
    {
      path: '/playlet',
      name: 'playlet',
      component: playlet
    },
    {
      path: '/index',
      name: 'index',
      component: index
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
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import today from '@/pages/today'
import rank from '@/pages/rank'
import fashion from '@/pages/fashion'
import punchline from '@/pages/punchline'
import playlet from '@/pages/playlet'
import index from '@/pages/index'
import tagindex from '@/pages/tagindex'
import player from '@/pages/player'
import aboutus from '@/pages/aboutus'
import aboutshotcut from '@/pages/aboutshotcut'
import test from '@/pages/test'
import testplayer from '@/pages/testplayer'

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
      path: '/tagindex/:token',
      name: 'tagindex',
      component: tagindex
    },
    {
      path: '/player/:data',
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
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/testplayer',
      name: 'testplayer',
      component: testplayer
    }
  ]
})

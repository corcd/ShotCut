// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Vcomp from './components/index'
import Axios from 'axios'
import VueVideoPlayer from 'vue-video-player'

import 'videojs-contrib-hls'

import 'element-ui/lib/theme-chalk/index.css'
import 'video.js/dist/video-js.css'
import './assets/css/global.scss'

Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
Vue.use(Vcomp)

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})

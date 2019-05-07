import items from './items'
import frame from './frame'
import homeheader from "./homeheader";
import footbar from './footbar'
import navbar from './navbar'
import newslist from './newslist'
import aboutframe from './aboutframe'
import hottags from './hottags'
import videoitem from './videoitem'
import discuss from './discuss'
import recommend from './recommend'

const components = {
  items,
  frame,
  homeheader,
  footbar,
  navbar,
  newslist,
  aboutframe,
  hottags,
  videoitem,
  discuss,
  recommend
}

const install = (Vue, options = {}) => {
  if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
  Vue.prototype.$notice = Notification
  // Vue.prototype.$message = Message
  install.installed = true
}
install.installed = false
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const Vcomp = {
  ...components,
  install
}

export default Vcomp

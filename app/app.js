import Vue from 'nativescript-vue'
import App from './components/App'
import Home from './components/Home'
import DrawerContent from './components/DrawerContent'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import Navigator from 'nativescript-vue-navigator'
import { routes } from './routes'
console.log('routes', routes)
Vue.use(Navigator, { routes })

Vue.use(RadSideDrawer)

Vue.config.silent = TNS_ENV === 'production'

new Vue({
  render(h) {
    return h(App, [
      h(DrawerContent, { slot: 'drawerContent' }),
      h(Home, { slot: 'mainContent' }),
    ])
  },
}).$start()

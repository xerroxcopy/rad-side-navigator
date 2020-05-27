import Home from './components/Home'
import Browse from './components/Browse'

export const routes = {
  '/home': {
    component: Home,
    meta: { name: 'Home' },
  },
  '/browse': {
    component: Browse,
    meta: { name: 'Browse' },
  },
  // '/featured': {
  //   component: Featured,
  // },
}

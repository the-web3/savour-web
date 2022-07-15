import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _df55155c = () => interopDefault(import('../pages/download/index.vue' /* webpackChunkName: "pages/download/index" */))
const _0bcf4df5 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _682e35ad = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _533f4cd2 = () => interopDefault(import('../pages/safe/index.vue' /* webpackChunkName: "pages/safe/index" */))
const _07cbbc4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/download",
    component: _df55155c,
    name: "download"
  }, {
    path: "/login",
    component: _0bcf4df5,
    name: "login"
  }, {
    path: "/register",
    component: _682e35ad,
    name: "register"
  }, {
    path: "/safe",
    component: _533f4cd2,
    name: "safe"
  }, {
    path: "/",
    component: _07cbbc4a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

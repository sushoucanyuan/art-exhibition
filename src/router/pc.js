import Vue from 'vue'
import Router from 'vue-router'

const pc = () =>
  import ( /* webpackChunkName: "pc" */ '@/components/pc.vue')

const main = () =>
  import ( /* webpackChunkName: "main" */ '@/components/pc/main.vue')

export default new Router({
  routes: [{
    path: '/',
    component: pc,
    children: [{
      path: '/',
      component: main,
      children: []
    }]
  }]
})
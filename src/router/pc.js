import Vue from 'vue'
import Router from 'vue-router'

const pc = () =>
  import ( /* webpackChunkName: "pc" */ '@/components/pc.vue')

const main = () =>
  import ( /* webpackChunkName: "pc-main" */ '@/components/pc/main.vue')

const index = () =>
  import ( /* webpackChunkName: "pc-index" */ '@/components/pc/index.vue')

const aboutUs = () =>
  import ( /* webpackChunkName: "pc-aboutUs" */ '@/components/pc/about-us.vue')

const artistsAndWorks = () =>
  import ( /* webpackChunkName: "pc-artists-and-works" */ '@/components/pc/artists-and-works.vue')

const reports = () =>
  import ( /* webpackChunkName: "pc-reports" */ '@/components/pc/reports.vue')

const mustKonw = () =>
  import ( /* webpackChunkName: "pc-must-know" */ '@/components/pc/must-know.vue')

const moreArtists = () =>
  import ( /* webpackChunkName: "pc-more-artists" */ '@/components/pc/more-artists.vue')

const moreWorks = () =>
  import ( /* webpackChunkName: "pc-more-works" */ '@/components/pc/more-works.vue')

const moreArtistsDetail = () =>
  import ( /* webpackChunkName: "pc-more-artists-detail" */ '@/components/pc/more-artists-detail.vue')

const reportsDetail = () =>
  import ( /* webpackChunkName: "pc-reports-detail" */ '@/components/pc/reports-detail.vue')

const pcMain = [
{
  name: 'index',
  path: 'index',
  component: index
}, {
  name: 'about-us',
  path: 'about-us',
  component: aboutUs
}, {
  name: 'artists-and-works',
  path: 'artists-and-works',
  component: artistsAndWorks
}, {
  name: 'reports',
  path: 'reports',
  component: reports
}, {
  name: 'must-know',
  path: 'must-know',
  component: mustKonw
}, {
  name: 'more-artists',
  path: 'more-artists',
  component: moreArtists
}, {
  name: 'more-works',
  path: 'more-works',
  component: moreWorks
}, {
  name: 'more-artists-detail',
  props: true,
  path: 'more-artists-detail/:id',
  component: moreArtistsDetail
}, {
  name: 'reports-detail',
  path: 'reports-detail',
  component: reportsDetail
}]

const router = new Router({
  routes: [{
    path: '/',
    component: pc,
    children: [{
      path: '/',
      component: main,
      redirect: { name: 'index' },
      children: pcMain
    }]
  }]
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
  next()
})

export default router
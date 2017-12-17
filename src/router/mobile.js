import Vue from 'vue'
import Router from 'vue-router'

const mobile = () =>
  import ( /* webpackChunkName: "mobile" */ '@/components/mobile.vue')

const main = () =>
  import ( /* webpackChunkName: "main" */ '@/components/mobile/main.vue')

const index = () =>
  import ( /* webpackChunkName: "index" */ '@/components/mobile/index.vue')

const aboutUs = () =>
  import ( /* webpackChunkName: "about-us" */ '@/components/mobile/about-us.vue')

const artistsAndWorks = () =>
  import ( /* webpackChunkName: "artists-and-works" */ '@/components/mobile/artists-and-works.vue')

const reports = () =>
  import ( /* webpackChunkName: "reports" */ '@/components/mobile/reports.vue')

const mustKnow = () =>
  import ( /* webpackChunkName: "must-know" */ '@/components/mobile/must-know.vue')

const moreWorks = () =>
  import ( /* webpackChunkName: "more-works" */ '@/components/mobile/more-works.vue')

const moreArtists = () =>
  import ( /* webpackChunkName: "more-artists" */ '@/components/mobile/more-artists.vue')

const moreWorksDetail = () =>
  import ( /* webpackChunkName: "more-works-detail" */ '@/components/mobile/more-works-detail.vue')

const moreArtistsDetail = () =>
  import ( /* webpackChunkName: "more-artists-detail" */ '@/components/mobile/more-artists-detail.vue')

const reportsDetail = () =>
  import ( /* webpackChunkName: "reports-detail" */ '@/components/mobile/reports-detail.vue')

Vue.use(Router)

const mobileMain = [{
  name: 'index',
  path: 'index',
  meta: { title: '首页' },
  component: index
}, {
  name: 'about-us',
  path: 'about-us',
  meta: { title: '关于我们' },
  component: aboutUs
}, {
  name: 'artists-and-works',
  path: 'artists-and-works',
  meta: { title: '参展艺术家·作品' },
  component: artistsAndWorks
}, {
  name: 'reports',
  path: 'reports',
  meta: { title: '展览报道' },
  component: reports
}, {
  name: 'must-know',
  path: 'must-know',
  meta: { title: '观展须知' },
  component: mustKnow
}]

const router = new Router({
  routes: [{
    path: '/',
    component: mobile,
    children: [{
      path: '/',
      component: main,
      redirect: { name: 'index' },
      children: mobileMain
    }, {
      name: 'more-works',
      path: 'more-works',
      meta: { title: '更多作品' },
      component: moreWorks
    }, {
      name: 'more-artists',
      path: 'more-artists',
      meta: { title: '更多艺术家' },
      component: moreArtists
    }, {
      name: 'more-artists-detail',
      path: 'more-artists-detail/:id',
      props: true,
      meta: { title: '艺术家详细信息' },
      component: moreArtistsDetail
    }, {
      name: 'more-works-detail',
      path: 'more-works-detail/:id',
      props: true,
      meta: { title: '作品详细信息' },
      component: moreWorksDetail
    }, {
      name: 'reports-detail',
      path: 'reports-detail/:type/:id',
      props: true,
      meta: { title: '新闻信息' },
      component: reportsDetail
    }]
  }]
})

export default router
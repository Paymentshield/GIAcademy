import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import library from '../views/Library.vue'
import introToGI from '../views/modules/introToGi.vue'
import HomeInsurance from '../views/modules/HomeInsurance.vue'
import OtherInsurance from '../views/modules/OtherInsurance.vue'
import AdviserHub from '../views/modules/AdviserHub.vue'
import RegulatoryChanges from '../views/modules/RegulatoryChanges.vue'
import SalesTechnique from '../views/modules/SalesTechnique.vue'
import tests from '../views/Tests.vue'
import events from '../views/Events.vue'
//import FourOFour from '../views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true,
        title: 'GI Academy | Paymentshield'
      }
    },
    {
        path: '/library',
        name: 'library',
        component: library,
        meta: {
            auth: true,
            title: 'Library | GI Academy'
        }
    },
    {
        path: '/training-modules/intro-to-gi',
        name: 'introToGI',
        component: introToGI,
        meta: {
            auth: true,
            title: 'Introduction to GI | GI Academy'
        }
    },
    {
        path: '/training-modules/home-insurance',
        name: 'HomeInsurance',
        component: HomeInsurance,
        meta: {
            auth: true,
            title: 'Home Insurance | GI Academy'
        }
    },
    {
        path: '/training-modules/other-insurance',
        name: 'OtherInsurance',
        component: OtherInsurance,
        meta: {
            auth: true,
            title: 'Other Insurance | GI Academy'
        }
    },
    {
        path: '/training-modules/adviser-hub',
        name: 'AdviserHub',
        component: AdviserHub,
        meta: {
            auth: true,
            title: 'Adviser Hub | GI Academy'
        }
    },
    {
        path: '/training-modules/regulatory-changes',
        name: 'RegulatoryChanges',
        component: RegulatoryChanges,
        meta: {
            auth: true,
            title: 'Regulatory Changes | GI Academy'
        }
    },
    {
        path: '/training-modules/sales-technique',
        name: 'SalesTechnique',
        component: SalesTechnique,
        meta: {
            auth: true,
            title: 'Sales Technique | GI Academy'
        }
    },
    {
        path: '/tests',
        name: 'tests',
        component: tests,
        meta: {
            auth: true,
            title: 'Tests | GI Academy'
        }
    },
    {
        path: '/events',
        name: 'events',
        component: events,
        meta: {
            auth: true,
            title: 'Events | GI Academy'
        }
    }
    // {
    //   path: '/404',
    //   name: '404',
    //   component: FourOFour,
    //   meta: {
    //     auth: true,
    //     title: 'Page not Found | Paymentshield'
    //   }
    // }
  ],
})

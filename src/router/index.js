import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BlogPageList from '@/components/BlogPageList'
import FoodRequest from '@/components/FoodRequest'
import EventList from '@/components/Event'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog-page-listing',
      name: 'BlogPageList',
      component: BlogPageList
    },
    {
      path: '/event-listing',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/food-request',
      name: 'FoodRequest',
      component: FoodRequest
    },
    {
      path: '/food-request/:pk',
      name: 'FoodRequestCreate',
      component: FoodRequest
    },

  ]
})

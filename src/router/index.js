import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BlogPageList from '@/components/BlogPageList'
import BlogPageShow from '@/components/BlogPageShow'
import FoodRequest from '@/components/FoodRequest'
import EventList from '@/components/Event'
import EventShow from '@/components/EventShow'

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
      path: '/show-blog-page',
      name: 'BlogPageShow',
      component: BlogPageShow
    },
    {
      path: '/event-listing',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/show-event',
      name: 'EventShow',
      component: EventShow
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

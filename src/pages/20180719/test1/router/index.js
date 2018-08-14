import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index.vue'
import pageQuiButton from '../view/pageQuiButton.vue'
import pageQuiNav from '../view/pageQuiNav.vue'
import pageQuiList from '../view/pageQuiList.vue'

Vue.use(Router)

export default () => {
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/btn',
        name: 'pageQuiButton',
        component: pageQuiButton
      },
      {
        path: '/nav',
        name: 'pageQuiNav',
        component: pageQuiNav
      },
      {
        path: '/list',
        name: 'pageQuiList',
        component: pageQuiList
      }
    ]
  })
  return router
}

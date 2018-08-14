import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import list from '../views/list'
import detail from '../views/detail'

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
        path: '/list',
        name: 'list',
        component: list
      },
      {
        path: '/detail',
        name: 'detail',
        component: detail
      }
    ]
  })
  return router
}

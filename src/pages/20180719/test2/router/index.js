import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index.vue'
import style from '../view/style.vue'
import wenben from '../view/wenben.vue'
import template from '../view/template.vue'

Vue.use(Router)

export default() =>{
	const router = new Router({
		routes:[
			{
				path:'/',
				name:'index',
				component:index
			},
			{
				path:'/style',
				name:'style',
				component:style
			},
			{
				path:'/wenben',
				name:'wenben',
				component:wenben
			},
			{
				path:'/template',
				name:'template',
				component:template
			}
		]
	})
	return router
}
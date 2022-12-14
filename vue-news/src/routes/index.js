import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes: [
	{
		path: '/',
		redirect: '/news',
	},
	{
		// path : url주소
		// component: url주소로 갔을때 표시될  컴포넌트(페이지)
		path: '/news',
		name : "news",
		component: NewsView,
	},
	{
		path: '/ask',
		name : "ask",
		component: AskView,
	},
	{
		path: '/jobs',
		name : "jobs",
		component: JobsView,
	},
	{
	  path: '/item/:id',
	  component: ItemView
	},
	{
	  path: '/user/:id',
   	  component: UserView
	}
  ]
});
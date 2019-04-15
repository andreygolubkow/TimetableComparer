import Router from 'vue-router';
import TusurTimetable from '../components/tusur/TusurTimetable';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'tusur',
			component: TusurTimetable
		}
	]
});

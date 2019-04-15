import Router from 'vue-router';
import TusurTimetable from '../components/tusur/TusurTimetable';
import Vue from 'vue';
import TsuTimetable from '../components/tsu/TsuTimetable';

Vue.use(Router);

export default new Router({
	routes: [
		{ path: '/',
			redirect: to => {
				let university = localStorage.getItem('univer');
				if (university) {
					return university;
				} else {
					return 'tusur';
				}
			}},
		{
			path: '/tusur',
			name: 'tusur',
			component: TusurTimetable
		},
		{
			path: '/tsu',
			name: 'tsu',
			component: TsuTimetable
		}
	]
});

/* eslint-disable object-shorthand */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
// Helpers
import colors from 'vuetify/es5/util/colors';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import App from './App';
import Api from './services/http';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuex);

// eslint-disable-next-line no-new
new Vue({
	el: '#app',
	template: '<App/>',
	// eslint-disable-next-line object-curly-spacing
	components: {App},
	theme: {
		primary: colors.red.darken1, // #E53935
		secondary: colors.red.lighten4, // #FFCDD2
		accent: colors.indigo.base // #3F51B5
	},
	data: Api
});

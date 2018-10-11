/* eslint-disable object-shorthand */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  template: '<App/>',
  // eslint-disable-next-line object-curly-spacing
  components: {App},
});

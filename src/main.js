// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VCharts from 'v-charts';
Vue.use(VCharts);

import Faker from 'faker';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

Vue.use(require('vue-faker'));

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})

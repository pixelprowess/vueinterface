import './assets/style.css';
import './assets/appointments.json';

import _ from 'lodash';
import moment from 'moment';

import Vue from 'vue';
import App from './App.vue';

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})

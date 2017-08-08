import Vue from 'vue'
import App from './components/App.vue';
import './style.scss';
import store from './store'

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }});

// let events = [
//     { description: 'random event', date: moment('2017-07-06', 'YYYY-MM-DD') },
//     { description: 'random event', date: moment('2017-07-16', 'YYYY-MM-DD') },
//     { description: 'random event', date: moment('2017-07-26', 'YYYY-MM-DD') }
//   ]

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
});

let initialState = Object.assign({}, store.state, { events });
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  store,
  components: {
    App
  }
});

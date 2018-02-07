import Vue from 'vue'
import './style.scss';

import store from './store';


import moment from 'moment-timezone';

Object.defineProperty(Vue.prototype, '$moment', {get() {return this.$root.moment}});
moment.tz.setDefault('UTC');

import App from './components/App.vue';

/*let events = window.__INITIAL_STATE__.map(event =>{
    return{
        description:event.description,
        date: moment(event.date),
    }
})*/
let initialState = Object.assign({}, store.state, {events: window.__INITIAL_STATE__});
//store.replaceState(initialState);

new Vue({
    el: '#app',
    data: {
        moment
    },
    components:{
        App
    },
    store

});

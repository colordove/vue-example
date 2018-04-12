import Vue from 'vue';
import App from './App';
import router from './routers';
// Vuex
import Vuex from 'vuex';
import store from './store/store';
// UI Lib
// Polyfills
import 'babel-polyfill';
// Service Worker
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
});

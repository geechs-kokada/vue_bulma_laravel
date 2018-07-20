import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('index', require('./pages/Index.vue'));
Vue.component('profile', require('./pages/Profile.vue'));

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: require('./pages/Index.vue') 
        },
        {
            path: '/profile', 
            component: require('./pages/Profile.vue') 
        },
    ]
});

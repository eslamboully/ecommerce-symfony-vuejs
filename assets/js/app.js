import '../css/app.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueProgressBar from 'vue-progressbar'
import axios from 'axios';
import LoadScript from 'vue-plugin-load-script';

// Components
import HomeComponent from './components/HomeComponent';
import CategoryComponent from './components/CategoryComponent';
import ProductComponent from './components/ProductComponent';
import CartComponent from './components/CartComponent';
import OrdersComponent from './components/OrdersComponent';

const options = {
    color: 'grey',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.1s',
        opacity: '0.8s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueRouter);
Vue.use(LoadScript);
Vue.use(VueProgressBar, options);

window.Fire  = Vue;
window.axios = axios;
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/category/:id/:name?', component: CategoryComponent },
    { path: '/product/:id/:name?', component: ProductComponent },
    { path: '/cart', component: CartComponent },
    { path: '/orders', component: OrdersComponent },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

Vue.filter('replace',function (title) {
    return title.replace(/\s/g,'-');
});

const app = new Vue({
    el: '#abdelrahman',
    router,
    data : {

    }
});
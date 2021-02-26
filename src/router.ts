import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';

import ContentContainer from './components/ContentContainer.vue';

Vue.use(VueRouter);

const router: RouterOptions = {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ContentContainer,
        },
        {
            path: '/:genre',
            props: true,
            component: ContentContainer,
        },
        {
            path: '/:genre/:band',
            props: true,
            component: ContentContainer,
        },
        {
            path: '/:genre/:band/:musician',
            props: true,
            component: ContentContainer,
        },
    ],
};

export default new VueRouter(router);
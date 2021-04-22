import VueRouter from 'vue-router';
import HomePage from '@/router/pages/HomePage.vue';
import NotFound from '@/router/pages/NotFound.vue';
import { PageNames } from './pageNames';

function createRouter(): VueRouter {
  const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        path: '/',
        name: PageNames.Home,
        component: HomePage,
      },
      {
        path: '*',
        name: PageNames.NotFound,
        component: NotFound,
      },
    ],
  });

  return router;
}

export default createRouter;

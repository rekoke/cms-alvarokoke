import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Alvarokoke from './views/Alvarokoke.vue';
import Travel from './views/Travel.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
        inHome: true,
      },
    },
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { hideNavigation: true },
    },
    {
      path: '/alvarokoke',
      name: 'alvarokoke',
      component: Alvarokoke,
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const inHome = window.location.pathname === '/home';
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser && !inHome) next('home');
  else next();
});
export default router;

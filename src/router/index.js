import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import HelpEnhance from '../views/HelpEnhance.vue';
import FitnessProject from '../views/FitnessProject.vue';
import HelpTense from '../views/HelpTense.vue';
import WebIntegrator from '../views/WebIntegrator.vue';
import PersonalFinance from '../views/PersonalFinance.vue';
import OnlineStore from '../views/OnlineStore.vue';

const routes = [
  {
    path: '/',
    name: 'Main Page',
    component: MainPage,
    meta: {
      title: 'AU Portfolio'
    }
  },
  {
    path: '/helpenhance',
    name: 'HelpEnhance',
    component: HelpEnhance,
    meta: {
      title: 'AU Portfolio - Help Enhance'
    }
  },
  {
    path: '/helptense',
    name: 'HelpTense',
    component: HelpTense,
    meta: {
      title: 'AU Portfolio - HelpTense'
    }
  },
  {
    path: '/onlinestore',
    name: 'OnlineStore',
    component: OnlineStore,
    meta: {
      title: 'AU Portfolio - Online Store'
    }
  },
  {
    path: '/personalfinance',
    name: 'PersonalFinance',
    component: PersonalFinance,
    meta: {
      title: 'AU Portfolio - Personal Finance'
    }
  },
  {
    path: '/webintegrator',
    name: 'WebIntegrator',
    component: WebIntegrator,
    meta: {
      title: 'AU Portfolio - WEB Integrator'
    }
  },
  {
    path: '/fitnessproject',
    name: 'FitnessProject',
    component: FitnessProject,
    meta: {
      title: 'AU Portfolio - Fitness Project'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;

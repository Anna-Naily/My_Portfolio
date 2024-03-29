import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

createApp(App).use(router).mount('#app');

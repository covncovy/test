import { createRouter, createWebHistory } from 'vue-router';
import Education from '@views/Education.vue';
import Land from '@views/Land.vue';
import Home from '@views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/land',
    name: 'Land',
    component: Land
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

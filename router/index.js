import { createRouter, createWebHistory } from 'vue-router';
import Education from '@views/Education.vue';
import Land from '@views/Land.vue';
import Home from '@views/Home.vue';

const routes = [
  {
    path: '/test',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      next();
    }
  },
  {
    path: '/test/education',
    name: 'Education',
    component: Education,
    beforeEnter: (to, from, next) => {
      next();
    }
  },
  {
    path: '/test/land',
    name: 'Land',
    component: Land,
    beforeEnter: (to, from, next) => {
      next();
    }
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

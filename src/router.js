import { createRouter, createWebHistory } from 'vue-router';

// pages
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { name: 'coaches', path: '/coaches', component: CoachesList },
    {
      name: 'coach-detail',
      path: '/coaches/:id',
      component: CoachDetail,
      children: [
        { name: 'contact-coach', path: 'contact', component: ContactCoach }
      ]
    },
    { name: 'registration', path: '/register', component: CoachesRegistration },
    { name: 'requests', path: '/requests', component: RequestsReceived },
    { name: '404', path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;

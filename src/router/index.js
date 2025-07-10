import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
//   {
//     path: '/:pathMatch(.*)*',
//     component: NotFoundPage
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.onError((error) => {
  console.error('Router error:', error)
})

export default router;
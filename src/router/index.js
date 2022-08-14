import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CatalogView.vue'),
      children: [
        {
          path: ':catId',
          component: () => import('@/views/SubCatalogView.vue'),
          children: [
            {
              path: ':subcatId',
              component: () => import('@/views/InventoryView.vue'),
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.name !== 'auth' && !authStore.isAuth) return { name: 'auth' };
  if (to.name === 'auth' && authStore.isAuth) return { name: 'catalog' };
});

export default router;

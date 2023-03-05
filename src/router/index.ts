import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteNamesEnum } from '@/router/router.types'
import { AppLayoutsEnum } from '@/layouts/layouts.types'
import { AccessScopesEnum } from '@/modules/auth/services/auth.types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.home,
      component: () => import('@/pages/AboutView.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
        accessScopes: [AccessScopesEnum.LOGGED_IN]
      }
    },
    {
      path: '/two',
      name: RouteNamesEnum.two,
      component: () => import('@/pages/Two.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
        accessScopes: [AccessScopesEnum.LOGGED_IN]
      }
    },
    {
      path: '/three',
      name: RouteNamesEnum.three,
      component: () => import('@/pages/Three.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
        accessScopes: [AccessScopesEnum.CAN_READ_BOOKS]
      }
    },
    {
      path: '/access-error',
      name: RouteNamesEnum.accessError,
      component: () => import('@/modules/auth/pages/AccessErrorPage.vue'),
      meta: {
        layout: AppLayoutsEnum.error,
        // accessScopes: [AccessScopesEnum.CAN_READ_BOOKS]
      }
    }
  ]
})

// router.beforeEach(fetchAuthDataMiddleware)
// router.beforeEach(accessGuardMiddleware)
router.beforeEach(loadLayoutMiddleware)
export default router

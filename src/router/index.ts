// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Stripe from 'stripe'

const stripe = new Stripe(import.meta.env.VITE_STRIPE_KEY, {
  apiVersion: '2022-11-15'
})

async function log({ next, to }: { next: Function, to: any }) {
  if (to.query.session_id) {
    try {
      const verificationSession = await stripe.checkout.sessions.retrieve(to.query.session_id)
      if (verificationSession.payment_status === 'paid') {
        next()
      }
    } catch (error: any) {
      next({ name: 'Home' })
    }
  } else {
    next({ name: 'Home' })
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/paymentSuccess',
    name: 'PaymentSuccess',
    meta: {
      middleware: log
    },
    component: () => import('@/views/PaymentSuccess.vue')
  },
  {
    path: '/:pathMatch(.)',
    redirect: () => ({ name: 'Home' })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


function nextFactory(context: any, middleware: any, index: any) {
  const subsequentMiddleware = middleware[index]
  if (!subsequentMiddleware) return context.next

  return (...parameters: any) => {
    context.next(...parameters)
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})

export default router

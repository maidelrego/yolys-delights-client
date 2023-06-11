import Stripe from 'stripe'

const stripe = new Stripe(import.meta.env.VITE_STRIPE_KEY, {
  apiVersion: '2022-11-15'
})


export async function sessionIsValid (sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId)
}
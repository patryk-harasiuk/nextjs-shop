import { loadStripe } from '@stripe/stripe-js';
import { Stripe } from 'stripe';
import * as z from 'zod';

import { getEnv } from './env';

export const redirectToCheckout = async (session: Pick<Stripe.Checkout.Session, 'id'>) => {
  const stripe = await loadStripe(getEnv('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'));

  return stripe!.redirectToCheckout({
    sessionId: session.id,
  });
};

export const stripeSessionSchema: z.ZodSchema<Pick<Stripe.Checkout.Session, 'id'>> = z.object({
  id: z.string(),
});

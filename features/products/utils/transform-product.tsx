import { Product } from '@prisma/client';
import type Stripe from 'stripe';

export const transformProduct = ({
  name,
  price,
  image,
}: Product): Stripe.Checkout.SessionCreateParams.LineItem => ({
  name,
  amount: price,
  currency: 'PLN',
  images: [image],
  quantity: 1,
});

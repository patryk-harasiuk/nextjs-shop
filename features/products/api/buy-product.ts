import { Product } from '@prisma/client';

import { makeRequest } from '@/utils/make-request';
import { stripeSessionSchema } from '@/utils/stripe';

import { transformProduct } from '../utils/transform-product';

export const buyProduct = async (product: Product) => {
  const stripeProduct = transformProduct(product);

  return await makeRequest('/api/checkout/products/', {
    method: 'POST',
    schema: stripeSessionSchema,
    body: [stripeProduct],
  });
};

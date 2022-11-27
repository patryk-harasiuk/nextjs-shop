import { Product } from '@prisma/client';
import { transformProduct } from 'features/products/utils/transform-product';

import { makeRequest } from '@/utils/make-request';

import { stripeSessionSchema } from '../../../utils/stripe';

export const checkoutCart = async (products: Array<Product>) => {
  const stripeProducts = products.map((product) => transformProduct(product));

  return await makeRequest(`/api/checkout/products/`, {
    method: 'POST',
    body: stripeProducts,
    schema: stripeSessionSchema,
  });
};

import { Product } from '@prisma/client';
import { useMutation } from 'react-query';

import { redirectToCheckout } from '@/utils/stripe';

import { buyProduct } from '../api/buy-product';

export const useBuyProduct = () => {
  return useMutation((product: Product) => buyProduct(product), {
    onSuccess: redirectToCheckout,
  });
};

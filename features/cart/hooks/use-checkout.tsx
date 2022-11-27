import { Product } from '@prisma/client';
import { useMutation } from 'react-query';

import { redirectToCheckout } from '../../../utils/stripe';
import { checkoutCart } from '../api/checkout-cart';

export const useCheckout = () => {
  return useMutation((products: Array<Product>) => checkoutCart(products), {
    onSuccess: redirectToCheckout,
  });
};

import { useQuery } from 'react-query';

import { getProducts } from '../api/get-products';

export const useGetProducts = () => {
  return useQuery('products', getProducts, {
    select: (data) => data,
    retry: 2,
  });
};

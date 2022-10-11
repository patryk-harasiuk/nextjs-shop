import { makeRequest } from '@/utils/make-request';

import schema from '../schemas/products';

export const getProducts = async () => {
  return await makeRequest('/api/products', {
    method: 'get',
    schema: schema,
  });
};

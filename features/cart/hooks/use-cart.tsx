import { useContext, useMemo } from 'react';

import { CartStateContext } from '../context/cart-context';

const useCart = () => {
  const context = useContext(CartStateContext);

  if (context === undefined) throw new Error('useCart must be used within a CartStateProvider');

  return useMemo(() => context, [context]);
};

export default useCart;

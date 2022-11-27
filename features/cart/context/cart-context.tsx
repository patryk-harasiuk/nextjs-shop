import { createContext, useMemo, useReducer } from 'react';

import { cartReducer } from './reducers/cart-reducer';
import { Action, State } from './types';

type Dispatch = (action: Action) => void;

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartStateContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const initialState: State = { products: [], totalPrice: 0, isOpen: false };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log(state, 'state');

  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return <CartStateContext.Provider value={memoizedValue}>{children}</CartStateContext.Provider>;
};

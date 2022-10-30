import { createContext, useMemo, useReducer } from 'react';

import { cartReducer } from './reducers/cart-reducer';
import { Action, State } from './types';

type Dispatch = (action: Action) => void;

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartStateContext = createContext<{ state: State; dispatch: Dispatch } | null>(null);

const initialState: State = { products: [], totalPrice: 0, isOpen: false };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>;
};

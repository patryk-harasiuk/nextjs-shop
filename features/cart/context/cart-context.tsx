import { createContext } from 'react';

import { Action, State } from './types';

type Dispatch = (action: Action) => void;

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartStateContext = createContext<{ state: State; dispatch: Dispatch } | null>(null);

const initialState: State = { products: [], totalPrice: 0, isOpen: false };

export const CartProvider = ({ children }: CartProviderProps) => {
  <CartStateContext.Provider value={null}>{children}</CartStateContext.Provider>;
};

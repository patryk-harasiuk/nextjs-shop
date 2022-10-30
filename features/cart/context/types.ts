import { Product } from '@prisma/client';

export type Action =
  | { type: 'addProduct'; payload: Product }
  | { type: 'deleteProduct'; payload: Product }
  | { type: 'openMenu' }
  | { type: 'closeMenu' };

export type State = {
  products: Product[];
  totalPrice: number;
  isOpen: boolean;
};

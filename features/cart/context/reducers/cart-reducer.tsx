import type { Product } from '@prisma/client';

import type { Action, State } from '../types';

const calculateTotalPrice = (products: Product[]) =>
  products.reduce((arr, curr) => arr + curr.price, 0);

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addProduct': {
      const products = [...state.products];
      const newProduct = action.payload;

      const isNewProductInTheCart = products.find((product) => product.id === newProduct.id);

      const newProducts = [newProduct, ...products];

      const totalPrice = calculateTotalPrice(newProducts);

      if (!isNewProductInTheCart) {
        return {
          ...state,
          totalPrice,
          products: newProducts,
        };
      }
    }

    case 'deleteProduct': {
      const products = [...state.products];
      const productToDelete = action.payload;

      const newProducts = products.filter((product) => product.id !== productToDelete.id);

      const totalPrice = calculateTotalPrice(newProducts);

      return {
        ...state,
        totalPrice,
        products: newProducts,
      };
    }

    case 'openMenu': {
      return {
        ...state,
        isOpen: true,
      };
    }

    case 'closeMenu': {
      return {
        ...state,
        isOpen: false,
      };
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

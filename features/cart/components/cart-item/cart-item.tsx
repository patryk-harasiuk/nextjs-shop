// TODO: Fix this
/* eslint-disable @next/next/no-img-element */
import { Product } from '@prisma/client';
import useCart from 'features/cart/hooks/use-cart';

type CartItemProps = Product;

const CartItem = (product: CartItemProps) => {
  const { dispatch } = useCart();

  const handleRemoveFromCart = () => dispatch({ type: 'deleteProduct', payload: product });

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          alt="product"
          src={`/static/images${product.image}`}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className="ml-4">{product.name}</p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex">
            <button
              onClick={handleRemoveFromCart}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

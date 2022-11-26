import { Product } from '@prisma/client';

type CartItemProps = Product;

const CartItem = (product: CartItemProps) => {
  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img alt="" className="w-full h-full object-center object-cover" />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className="ml-4"></p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex">
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

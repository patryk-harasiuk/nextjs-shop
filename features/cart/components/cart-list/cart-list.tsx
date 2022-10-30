import { Product } from '@prisma/client';

import CartItem from '../cart-item/cart-item';

type CartListProps = {
  products: Product[];
};

const CartList = ({ products }: CartListProps) => {
  return (
    <ul className="-my-6 divide-y divide-gray-200">
      {products.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default CartList;

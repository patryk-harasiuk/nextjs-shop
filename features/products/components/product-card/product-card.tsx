// #TODO: Fix this
/* eslint-disable @next/next/no-img-element */
import { Product } from '@prisma/client';
import useCart from 'features/cart/hooks/use-cart';
import { useBuyProduct } from 'features/products/hooks/use-buy-product';

import ButtonMain from '@/components/button/button-main';

type ProductCardProps = Product;

const ProductCard = (product: ProductCardProps) => {
  const { image, name, price } = product;
  const { dispatch } = useCart();
  const { mutate } = useBuyProduct();

  const handleAddToCart = () => {
    dispatch({ type: 'addProduct', payload: product });
    dispatch({ type: 'openMenu' });
  };

  const buyProduct = () => mutate(product);

  return (
    <article className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <img
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={`/static/images${image}`}
          alt="product"
        />
      </div>

      <div className="mt-1 flex items-center justify-between font-main">
        <h2 className="mt-0 text-sm text-gray-700">{name}</h2>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      </div>

      <div className="mt-5 flex flex-col w-full gap-5">
        <ButtonMain onClick={buyProduct}>Buy</ButtonMain>
        <ButtonMain onClick={handleAddToCart}>Add to cart</ButtonMain>
      </div>
    </article>
  );
};

export default ProductCard;

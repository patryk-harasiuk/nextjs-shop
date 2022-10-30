import Image from 'next/image';

import ButtonMain from '@/components/button/button-main';

type ProductCardProps = {
  id: string;
  description: string;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, description, name, price, image }: ProductCardProps) => {
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
        <ButtonMain>Buy</ButtonMain>
        <ButtonMain>Add to cart</ButtonMain>
      </div>
    </article>
  );
};

export default ProductCard;

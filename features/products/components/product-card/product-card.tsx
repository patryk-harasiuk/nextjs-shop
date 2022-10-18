import Image from 'next/image';
import Link from 'next/link';

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
      <Link href={`/products/${id}`}>
        <div className="w-full h-full">
          <div className="w-full min-h-70 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
            <Image
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              src={`/static/images${image}`}
              alt="product"
              width={'250px'}
              height={'250px'}
            />
          </div>

          <div className="mt-1 flex flex-col items-center">
            <h2 className="mt-0 font-main text-sm text-gray-700">{name}</h2>
            <p className="font-main mt-1 text-lg font-medium text-gray-900">{price}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;

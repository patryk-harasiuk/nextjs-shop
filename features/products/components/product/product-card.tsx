import Image from 'next/image';

type ProductCardProps = {
  id: string;
  description: string;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, description, name, price, image }: ProductCardProps) => {
  console.log(image, 'image cu');

  return (
    <article className="">
      <Image src={`/static/images${image}`} alt="product" width={'50px'} height={'50px'} />
      <h2 className="font-main ">{name}</h2>
      <p>{price}</p>
    </article>
  );
};

export default ProductCard;

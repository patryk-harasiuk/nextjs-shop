import { useRouter } from 'next/router';

type ProductProps = {
  id: string;
  description: string;
  name: string;
  price: number;
  image: string;
};

const Product = () => {
  const router = useRouter();

  console.log(router, 'ro');
  const { id } = router.query;

  return <div>product {id}</div>;
};

export default Product;

import { Product } from '@prisma/client';

import ProductCard from '../product/product-card';

type ProductsListProps = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div>
      {products.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;

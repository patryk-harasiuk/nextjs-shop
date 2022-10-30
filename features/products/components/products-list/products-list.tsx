import { Product } from '@prisma/client';

import ProductCard from '../product-card/product-card';

type ProductsListProps = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="bg-white max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;

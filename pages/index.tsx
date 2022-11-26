import Checkout from 'features/cart/components/checkout/checkout';
import { getProducts } from 'features/products/api/get-products';
import ProductsList from 'features/products/components/products-list/products-list';
import { useGetProducts } from 'features/products/hooks/use-get-products';
import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  const products = useGetProducts();

  console.log(products.data, 'products');

  return (
    <Layout>
      <ProductsList products={products.data} />
      <Checkout />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;

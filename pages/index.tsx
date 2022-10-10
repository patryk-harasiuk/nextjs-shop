import { getProducts } from 'features/products/api/get-products';
import { useGetProducts } from 'features/products/hooks/useGetProducts';
import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  const products = useGetProducts();

  console.log(products.data, 'products 1 1 1 11 11 1 1 1 11  1');

  return (
    <Layout>
      <div className="min-h-screen">
        <h2>MAIN PAGE</h2>
      </div>
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

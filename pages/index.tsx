import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <div className="min-h-screen">
        <h2>MAIN PAGE</h2>
      </div>
    </Layout>
  );
};

export default Home;

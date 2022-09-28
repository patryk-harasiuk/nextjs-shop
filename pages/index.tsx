import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    // <div>
    //   {!session && (
    //     <>
    //       <h1>You are not signed in</h1> <br />
    //       <button onClick={() => signIn('github')}>Sign in</button>
    //     </>
    //   )}

    //   {status === 'authenticated' && (
    <Layout>
      <div className="min-h-screen">
        {/* <h1>Signed in as {session.user?.name} </h1> <br /> */}
        <h2>MAIN PAGE</h2>
      </div>
    </Layout>
    //   )}
    // </div>
  );
};

export default Home;

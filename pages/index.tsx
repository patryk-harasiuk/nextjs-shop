import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <main>
        {!session && (
          <>
            <h1>You are not signed in</h1> <br />
            <button onClick={() => signIn('github')}>Sign in</button>
          </>
        )}

        {status === 'authenticated' && (
          <Layout>
            <h1>Signed in as {session.user?.name} </h1> <br />
            <button onClick={() => signOut()}>Sign out</button>
          </Layout>
        )}
      </main>
    </div>
  );
};

export default Home;

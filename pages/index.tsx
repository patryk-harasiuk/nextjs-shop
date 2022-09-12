import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Jobs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            <h1>You are not signed in</h1> <br />
            <button onClick={() => signIn('github')}>Sign in</button>
          </>
        )}

        {status === 'authenticated' && (
          <>
            <h1>Signed in as {session.user?.name} </h1> <br />
            <h2>pee pee poo poo</h2>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </main>

      <footer className={styles.footer}>Powered by Pragmatic Reviews</footer>
    </div>
  );
};

export default Home;

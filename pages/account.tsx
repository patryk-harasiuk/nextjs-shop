import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth/next';

import Layout from '../components/layout/Layout';
import useAuth from '../hooks/useAuth/useAuth';
import { authOptions } from './api/auth/[...nextauth]';

const UserProfile = () => {
  const { signOut } = useAuth();

  return (
    <Layout>
      <div className="px-16 font-main text-textGrey">
        <header className="flex justify-between items-center pb-5 border-b border-black">
          <h1 className="uppercase text-2xl">my account</h1>

          <button
            className="p-[10px] rounded-sm bg-textGrey hover:bg-slate-700 text-white text-xs uppercase"
            onClick={() => signOut()}
          >
            log out
          </button>
        </header>

        <div className="flex justify-between pt-5">
          <div>
            <p className="capitalize">order history</p>
            <p className="text-xs mt-3">You haven&apos;t placed any orders yet.</p>
          </div>

          <div>
            <p className="capitalize">account details</p>
            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default UserProfile;

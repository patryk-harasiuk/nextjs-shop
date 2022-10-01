import { GetServerSideProps } from 'next';

import Layout from '../components/layout/Layout';
import useAuth from '../hooks/useAuth/useAuth';
import requireAuth from '../utils/require-auth';

const UserProfile = () => {
  const { signOut } = useAuth();
  const signOutHandler = () => signOut({ callbackUrl: '/' });

  return (
    <Layout>
      <div className="px-16 font-main text-textGrey">
        <header className="flex justify-between items-center pb-5 border-b border-black">
          <h1 className="uppercase text-2xl">my account</h1>

          <button
            className="p-[10px] rounded-sm bg-textGrey hover:bg-slate-700 text-white text-xs uppercase"
            onClick={signOutHandler}
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
  return requireAuth(context);
};

export default UserProfile;

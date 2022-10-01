import { useRouter } from 'next/router';

import Layout from '../components/layout/Layout';
import useAuth from '../hooks/useAuth/useAuth';

const Signin = () => {
  const { signIn } = useAuth();
  const router = useRouter();

  const callbackUrl =
    Object.keys(router.query).length === 0 ? '/' : (router.query.return_url as string);
  const handleSignIn = () => signIn('github', { callbackUrl });

  return (
    <Layout>
      <div className="font-main text-textGrey">
        <h3 className="uppercase text-base">login with</h3>

        <button onClick={handleSignIn}>Github</button>
      </div>
    </Layout>
  );
};

export default Signin;

import { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth/next';

import { authOptions } from '../pages/api/auth/[...nextauth]';

const requireAuth = async (context: GetServerSidePropsContext) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: `/signin?return_url=${encodeURIComponent(context.resolvedUrl)}`,
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default requireAuth;

import Link from 'next/link';

import Layout from '../components/layout/Layout';

const ErrorPage = () => {
  return (
    <Layout>
      <div className="font-main text-textGrey py-32 flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl uppercase">404 page not found</h1>
        <p className="text-xs">
          The page you requested does not exist. Click{' '}
          <Link href={'/'}>
            <a className="underline decoration-1">here</a>
          </Link>{' '}
          to go home
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;

import Layout from '../components/layout/Layout';

const UserProfile = () => {
  return (
    <Layout>
      <div className="px-16 font-main text-textGrey">
        <header className="flex justify-between items-center pb-5 border-b border-black">
          <h1 className="uppercase text-2xl">my account</h1>

          <button>log out</button>
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

export default UserProfile;

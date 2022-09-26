import Image from 'next/image';

import useAuth from '../../../hooks/useAuth/useAuth';

const Header = () => {
  return (
    <header className="bg-slate-300 font-main">
      <div className="w-full flex justify-between items-center px-16 py-1">
        <Image src={'/user-icon.png'} alt="user" width="24px" height="24px" />

        <p className="text-xs">nextjs-shop</p>

        <Image src={'/search-icon.png'} alt="search" width="24px" height="24px" />
      </div>
    </header>
  );
};

export default Header;

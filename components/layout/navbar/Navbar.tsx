import useCart from 'features/cart/hooks/use-cart';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },

  {
    name: 'About',
    path: '/about',
  },
];

const Navbar = () => {
  const { dispatch } = useCart();

  const handleOpenMenu = () => dispatch({ type: 'openMenu' });

  return (
    <nav className="bg-white sticky w-full z-10 top-0 left-0 border-b border-slate-300 font-main">
      <div className="flex justify-between items-center px-16 py-4">
        <Link href={'/'}>
          <a className="text-4xl font-title">nextjs-shop</a>
        </Link>
        <div className="flex gap-8">
          <ul className="flex gap-8">
            {navLinks.map((navLink, index) => (
              <li className="cursor-pointer" key={index}>
                <Link href={navLink.path} key={index}>
                  <a>{navLink.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={handleOpenMenu} className="cursor-pointer">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
  return (
    <nav className="block border-b border-slate-300 font-main">
      <div className="flex justify-between items-center px-16 py-4">
        <Link href={'/'}>
          <a>
            <h4 className="text-4xl font-title">nextjs-shop</h4>
          </a>
        </Link>

        <ul className="flex gap-8">
          {navLinks.map((navLink, index) => (
            <li className="cursor-pointer" key={index}>
              <Link href={navLink.path} key={index}>
                <a>{navLink.name}</a>
              </Link>
            </li>
          ))}
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

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
    <nav className="block border border-slate-300 font-main">
      <div className="flex justify-between items-center px-16 py-4">
        <h4 className="text-4xl font-title">nextjs-shop</h4>

        <ul className="flex gap-8">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.path} key={index}>
              <li className="cursor-pointer">{navLink.name}</li>
            </Link>
          ))}
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

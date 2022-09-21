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
    <nav className="block">
      <div className="flex justify-between items-center px-16">
        <h4 className="text-3xl font-title">nextjs-shop</h4>

        <ul className="flex gap-8">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.path} key={index}>
              <li>{navLink.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

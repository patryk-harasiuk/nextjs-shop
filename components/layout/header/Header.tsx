import useAuth from '../../../hooks/useAuth/useAuth';

const Header = () => {
  return (
    <header className="bg-slate-300 font-main">
      <div className="w-full flex justify-between items-center px-16 py-1">
        <p className="text-xs">icon</p>

        <p className="text-xs">nextjs-shop</p>

        <p className="text-xs">icon</p>
      </div>
    </header>
  );
};

export default Header;

import Footer from './footer/Footer';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="h-full w-full pt-20 pb-28 bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

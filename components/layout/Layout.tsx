import Checkout from 'features/cart/components/checkout/checkout';

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
      <Checkout />
      <main className="min-h-full pt-20 pb-28 bg-white flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

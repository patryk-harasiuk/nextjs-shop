import Navbar from '../navbar/Navbar';
import Header from './header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

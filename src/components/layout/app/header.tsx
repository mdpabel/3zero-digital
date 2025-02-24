import BigScreenNavbar from './big-screen-navbar';
import TopBar from './top-bar';
import SmallScreenNavbar from './small-screen-navbar';
import { getProductWithServices } from '@/lib/product/get-product';

const Header = async () => {
  const services = (await getProductWithServices()).filter(
    (s) => s.products.length > 0,
  );

  return (
    <div>
      <TopBar />
      <BigScreenNavbar services={services} />
      <SmallScreenNavbar services={services} />
    </div>
  );
};

export default Header;

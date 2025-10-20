import LocalMallIcon from '@mui/icons-material/LocalMall';
import BrandLogo from '../../assets/Logo.svg';
import { navItems_ecom } from '../../constants/DataList';
import { CartContext } from '../../constants/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar_ecom = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-10">
            <Link className="flex items-center gap-3" to="/">
              <img src={BrandLogo} alt="" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                NetBinge
              </h2>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems_ecom.map((item, index) => (
                <Link
                  key={index}
                  className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to='/cart'
                className="relative rounded-lg p-2 text-gray-300 transition hover:bg-gray-300/10 hover:text-white"
              >
                <LocalMallIcon />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                      {itemCount}
                    </span>
                )}              
              </Link>
            </div>
          </div>
      </header>
    </>
  );
};

export default Navbar_ecom;

import LocalMallIcon from '@mui/icons-material/LocalMall';
import BrandLogo from '../../assets/Logo.svg';
import { navItems_ecom } from '../../constants/DataList';

const Navbar_ecom = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-10">
          <a className="flex items-center gap-3" href="/">
            <img src={BrandLogo} alt="" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              NetBinge
            </h2>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems_ecom.map((item, index) => (
              <a
                key={index}
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href='/cart'
              className="rounded-lg p-2 text-gray-600 hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/20 dark:hover:text-primary"
            >
              <LocalMallIcon />
            </a>
          </div>
        </div>
    </header>
  );
};

export default Navbar_ecom;

import Logo from '../../assets/Logo.svg';

const Navbar_ecom = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-10">
          <a className="flex items-center gap-3" href="#">
            <img src={Logo} alt="" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              NetBinge
            </h2>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {['New Arrivals', 'Best Sellers', 'Apparel', 'Posters', 'Mugs', 'Accessories'].map((item) => (
              <a
                key={item}
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#" className="hidden border rounded-lg bg-red-700 px-4 py-2 text-sm font-bold text-primary transition hover:bg-red-800/20 dark:bg-primary/20 dark:hover:bg-primary/30 sm:block">
              Sign In
            </a>
            {[...Array(2)].map((_, i) => (
              <button
                key={i}
                className="rounded-lg p-2 text-gray-600 hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/20 dark:hover:text-primary"
              >
                <svg
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </button>
            ))}
          </div>
        </div>
    </header>
  );
};

export default Navbar_ecom;

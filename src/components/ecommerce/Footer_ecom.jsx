
const Footer_ecom = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto px-4 py-10 text-center lg:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {['About Us', 'Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mb-8 flex justify-center gap-6">
          {[...Array(3)].map((_, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <svg
                fill="currentColor"
                height="24px"
                width="24px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Replace with actual SVG paths for each icon if needed */}
                <path d="M0 0h256v256H0z" fill="none" />
              </svg>
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 NetBinge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer_ecom;

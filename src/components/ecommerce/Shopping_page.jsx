import Navbar_ecom from "./Navbar_ecom";
import Footer_ecom from "./Footer_ecom";
import { shirts, posters, mugs } from "../../constants/DataList";
import { useCart } from "../../constants/CartContext";

const Shopping_page = () => {
  const { addToCart, cartItems } = useCart();

  return (
    <>
      <Navbar_ecom />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-10 lg:px-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Shop Our Collection
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Find the perfect merchandise to celebrate your favorite films
            </p>
          </div>
          <div className="space-y-16">
            <section id="apparel">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Apparel
              </h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {shirts.map((shirt, index) => (
                  <div key={index} className="p-2 rounded-xl transition hover:bg-gray-400/10 hover:scale-101">
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                      <img
                        src={shirt.image}
                        alt={`${shirt.title} graphic t-shirt`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700 dark:text-gray-300">
                          <a href="#">
                            {shirt.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {shirt.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {shirt.price}
                      </p>
                    </div>
                    <button 
                      onClick={()=>{
                        addToCart({...shirt, quantity: 1});
                        console.log(shirt);
                      }} 
                      className="mt-4 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-600">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>
            <section id="posters">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Posters
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {posters.map((poster, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                        <img
                          src={poster.image}
                          alt={`${poster.title} movie poster`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700 dark:text-gray-300">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {poster.title}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {poster.size}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {poster.price}
                        </p>
                      </div>
                      <button className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-sm font-bold text-black opacity-0 transition hover:bg-green-600 group-hover:opacity-100">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section id="mugs">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Mugs
              </h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mugs.map((mug, index) => (
                  <div key={index} className="group relative">
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                      <img
                        src={mug.image}
                        alt={mug.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700 dark:text-gray-300">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {mug.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {mug.material}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {mug.price}
                      </p>
                    </div>
                    <button className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white opacity-0 transition hover:bg-opacity-90 group-hover:opacity-100">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer_ecom />
    </>
  );
};

export default Shopping_page;

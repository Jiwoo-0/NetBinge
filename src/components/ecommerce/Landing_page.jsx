import Navbar_ecom from "./Navbar_ecom";
import Footer_ecom from "./Footer_ecom";
import { featuredProducts_landingPage, categories_landingPage } from "../../constants/DataList";

const Landing_page = () => {
  return (
    <>
      <Navbar_ecom />
      <div className="flex min-h-screen flex-col">
        <section className="container mx-auto px-4 py-10 sm:py-20 lg:px-10">
          <div
            className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center p-8 text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(199, 30, 30, 0.2), rgba(199, 30, 30, 0.4)), url('https://pbs.twimg.com/media/Ck9CtrhWUAEcKvQ.jpg')`,
            }}
          >
            <div className="z-10 flex max-w-3xl flex-col items-center gap-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Your Favorite Movies, Now Wearable
              </h1>
              <p className="text-base font-light text-gray-200 sm:text-lg">
                Explore our exclusive collection of movie-themed merchandise.
                From iconic tees to collectible posters, find the perfect way to
                show your love for cinema.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 text-base font-bold text-black transition hover:bg-opacity-90 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 lg:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Featured Products
          </h2>
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredProducts_landingPage.map((product, index) => (
              <a
                key={index}
                className="w-64 min-w-64 snap-start sm:w-72 sm:min-w-72 transition hover:scale-105"
              >
                <div className="group flex flex-col gap-4">
                  <div
                    className="aspect-square w-full overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-primary dark:text-white">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {product.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 lg:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories_landingPage.map((category, index) => (
              <a key={index} className="group transition hover:scale-105" href={category.href}>
                <div
                  className="aspect-square w-full overflow-hidden rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${category.image}')` }}
                ></div>
                <p className="mt-3 font-medium text-gray-900 group-hover:text-primary dark:text-white">
                  {category.name}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-background-light py-20 dark:bg-background-dark sm:py-24">
          <div 
            className="w-[90vw] bg-red-600/20 rounded-lg container mx-auto flex flex-col items-center gap-6 p-8 text-center lg:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(199, 30, 30, 0.2), rgba(199, 30, 30, 0.4)), url('/marvel.gif')`,
              backgroundSize: 'cover',
            }}
          >
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Join the NetBinge Community
            </h2>
            <p className="max-w-2xl text-gray-600 dark:text-gray-300">
              Stay up-to-date on new arrivals, exclusive offers, and more.
            </p>
            <a href="#" className="rounded-lg bg-white px-8 py-3 text-base font-bold text-black transition hover:bg-opacity-50 hover:scale-101">
              Sign Up for Our Newsletter
            </a>
          </div>
        </section>
      </div>
      <Footer_ecom />
    </>
  );
};

export default Landing_page;

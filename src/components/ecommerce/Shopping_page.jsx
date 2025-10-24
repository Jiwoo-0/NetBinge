import Navbar_ecom from "./Navbar_ecom";
import Footer_ecom from "./Footer_ecom";
import { shirts, posters, mugs } from "../../constants/DataList";
import { CartContext } from "../../constants/CartContext"
import { useContext } from "react";
import Product from "./components/Product";
import Product_poster from "./components/Product_poster";

const Shopping_page = () => {
  const { addToBasket } = useContext(CartContext);

  const handleAdd = () => {
    addToBasket(item);
    console.log(item);
  }

  return (
    <>
      <Navbar_ecom />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-10 lg:px-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Shop Our Collection
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Find the perfect merchandise to celebrate your favorite films
            </p>
          </div>
          <div className="space-y-16">
            <section id="apparel">
              <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                Apparel
              </h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {shirts.map((shirt, index) => (
                  <Product  key={index} item={shirt}/>
                ))}
              </div>
            </section>
            <section id="posters">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                  Posters
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {posters.map((poster, index) => (
                    <Product_poster key={index} item={poster} />
                  ))}
                </div>
              </div>
            </section>
            <section id="mugs">
              <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                Mugs
              </h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mugs.map((mug, index) => (
                  <Product key={index} item={mug}/>
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

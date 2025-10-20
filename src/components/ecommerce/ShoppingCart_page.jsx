import { cartItems } from "../../constants/DataList";
import Footer_ecom from "./Footer_ecom";
import Navbar_ecom from "./Navbar_ecom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CartContext } from "../../constants/CartContext";
import { useContext } from "react";
import CartProduct from "./components/CartProduct";
import { Link } from "react-router-dom";

const ShoppingCart_page = () => {
  const { total, products } = useContext(CartContext);
  return (
    <>
      <Navbar_ecom />
      <main className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
        <section className="container mx-auto px-4 py-10 lg:px-10 flex-grow">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Shopping Cart
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {products.map((item, index) => (
                <CartProduct key={index} item={item}/>
              ))}

              <div className="mt-8">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ArrowBackIcon />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="sticky top-20 h-fit rounded-lg bg-gray-100 p-6 dark:bg-black/20">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₱5.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-3 font-bold dark:border-gray-700">
                  <span className="text-lg">Total</span>
                  <span className="text-lg">₱{total + 5}</span>
                </div>
              </div>
              <button className="mt-6 w-full rounded-lg bg-green-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-green-500">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer_ecom />
    </>
  );
};

export default ShoppingCart_page;

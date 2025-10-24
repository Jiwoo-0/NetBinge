import Footer_ecom from "./Footer_ecom";
import Navbar_ecom from "./Navbar_ecom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CartContext } from "../../constants/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import CheckoutProduct from "./components/CheckoutProduct";

const Checkout = () => {
  const { total, products } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  return (
    <>
      <Navbar_ecom />
      <main className="bg-background-light dark:bg-background-dark font-display text-gray-200 min-h-screen flex flex-col">
        <section className="container mx-auto px-4 py-10 lg:px-10 flex-grow">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Checkout
            </h1>
          </div>

          <form action="">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div class="rounded-lg p-6 bg-white/5 lg:col-span-2">
                <div class="mb-6">
                  <h2 class="text-2xl font-bold text-white">
                    Shipping Information
                  </h2>
                  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-300"
                        for="first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                        id="first-name"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-300"
                        for="last-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                        id="last-name"
                        type="text"
                        required
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        class="mb-1 block text-sm font-medium text-gray-300"
                        for="address"
                      >
                        Address
                      </label>
                      <input
                        class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                        id="address"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-300"
                        for="city"
                      >
                        City
                      </label>
                      <input
                        class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                        id="city"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-300"
                        for="zip"
                      >
                        Zip Code
                      </label>
                      <input
                        class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                        id="zip"
                        type="text"
                        required
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        class="mb-1 block text-sm font-medium text-gray-300"
                        for="address"
                      >
                        Phone Address
                      </label>
                      <input
                        class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                        id="phoneNumber"
                        type="text"
                        placeholder="+63"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">Payment Method</h2>
                  <div className="mt-4 space-y-4">
                    <div
                      className={`flex items-center rounded-md p-4 ${
                        paymentMethod === "credit-card"
                          ? "bg-red-400/60"
                          : "bg-primary/5"
                      }`}
                    >
                      <input
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        id="credit-card"
                        name="payment-method"
                        type="radio"
                        checked={paymentMethod === "credit-card"}
                        onChange={() => setPaymentMethod("credit-card")}
                        required
                      />
                      <label
                        className="ml-3 flex-grow text-sm font-medium text-white"
                        htmlFor="credit-card"
                      >
                        Credit Card
                      </label>
                      <div className="flex items-center gap-2">
                        <FaCcVisa className="h-6" />
                        <FaCcMastercard className="h-6" />
                      </div>
                    </div>
                    <div
                      className={`flex items-center rounded-md p-4 ${
                        paymentMethod === "paypal"
                          ? "bg-red-400/60"
                          : "bg-primary/5"
                      }`}
                    >
                      <input
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        id="paypal"
                        name="payment-method"
                        type="radio"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        required
                      />
                      <label
                        className="ml-3 flex-grow text-sm font-medium text-white"
                        htmlFor="paypal"
                      >
                        PayPal
                      </label>
                      <FaPaypal className="h-6" />
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          class="mb-1 block text-sm font-medium text-gray-300"
                          for="card-number"
                        >
                          Card Number
                        </label>
                        <input
                          class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                          id="card-number"
                          placeholder="**** **** **** 1234"
                          type="text"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="mb-1 block text-sm font-medium text-gray-300"
                          for="card-name"
                        >
                          Name on Card
                        </label>
                        <input
                          class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                          id="card-name"
                          placeholder="Aaron Ropeta"
                          type="text"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="mb-1 block text-sm font-medium text-gray-300"
                          for="expiry"
                        >
                          Expiration Date
                        </label>
                        <input
                          class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                          id="expiry"
                          placeholder="MM/YY"
                          type="text"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="mb-1 block text-sm font-medium text-gray-300"
                          for="cvc"
                        >
                          CVC
                        </label>
                        <input
                          class="w-full rounded-md px-3 py-2 bg-white text-black border-gray-600"
                          id="cvc"
                          placeholder="123"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-8 flex justify-between">
                  <Link
                    class="inline-flex items-center gap-2 text-primary hover:underline"
                    to="/cart"
                  >
                    <ArrowBackIcon />
                    <span>Return to cart</span>
                  </Link>
                </div>
              </div>

              <div className="sticky p-8 top-20 h-fit rounded-lg bg-white/5">
                {products.map((item, index) => (
                  <CheckoutProduct key={index} item={item} />
                ))}
                <h2 className="mb-4 text-xl font-bold text-white">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₱{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₱5.00</span>
                  </div>
                  <div className="flex justify-between border-t  pt-3 font-bold border-gray-700">
                    <span className="text-lg">Total</span>
                    <span className="text-lg">₱{(total + 5).toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  to="/place-order"
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-green-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-green-500 text-center block"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer_ecom />
    </>
  );
};

export default Checkout;

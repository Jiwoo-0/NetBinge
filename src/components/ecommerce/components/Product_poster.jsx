import { useContext } from "react";
import { CartContext } from "../../../constants/CartContext";

const Product_poster = ({ item }) => {
  const { addToBasket, removeFromBasket, products } = useContext(CartContext);

  const isInCart = products.some((p) => p.name === item.name);

  const handleToggle = () => {
    if (isInCart) {
      removeFromBasket(item);
    } else {
      addToBasket(item);
      console.log(item);
    }
  };

  return (
    <div className="p-2 rounded-xl transition hover:bg-gray-400/10 hover:scale-101">
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-800">
        <img
          src={item.image}
          alt={`${item.name} movie poster`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-300">
            <div href="#">
              {item.name}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            {item.size}
          </p>
        </div>
        <p className="text-sm font-medium text-white">
          ₱{item.price}
        </p>
      </div>
      <button onClick={handleToggle} className={isInCart?"mt-4 w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500" :"mt-4 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-600"}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product_poster;

import { useContext } from "react";
import { CartContext } from "../../../constants/CartContext";

const Product_poster = ({ item }) => {
  const { addToBasket } = useContext(CartContext);

  const handleAdd = () => {
    addToBasket(item);
    console.log(item);
  };

  return (
    <div className="p-2 rounded-xl transition hover:bg-gray-400/10 hover:scale-101">
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
        <img
          src={item.image}
          alt={`${item.name} movie poster`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 dark:text-gray-300">
            <div href="#">
              {item.name}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {item.size}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          ₱{item.price}
        </p>
      </div>
      <button onClick={handleAdd} className="mt-4 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-600">
        Add to Cart
      </button>
    </div>
  );
};

export default Product_poster;

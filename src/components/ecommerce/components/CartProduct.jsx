import React, { useContext, useState } from "react";
import { CartContext } from "../../../constants/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';

const CartProduct = ({ item }) => {
  const { removeFromBasket, updateAmount } = useContext(CartContext);
    const [amount, setAmount] = useState(item?.amount ?? 1);
     
    const handleRemove = () => {
        removeFromBasket(item);
    }

    const decrement = () => {
        const next = Math.max(0, amount - 1);
        setAmount(next);

        if(next === 0){
            removeFromBasket(item);
        } else {
            updateAmount(item, next);
        }
    }

    const increment = () => {
        const next = amount + 1;
        setAmount(next);
        updateAmount(item, next);
    }

    return (
    <div className="flex items-center gap-6 rounded-lg p-4 bg-black/20"    >
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-md object-cover"
      />
      <div className="flex-grow">
        <h3 className="font-bold text-white">
          {item.name}
        </h3>
        <p className="text-sm text-gray-400">
          {item.details}
        </p>
        <p className="mt-2 font-bold text-white">
          ₱{item.price}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded border border-gray-300 dark:border-gray-700">
          <button
            onClick={decrement}
            className="px-3 py-1 text-gray-600 transition dark:text-gray-400 hover:bg-gray-300/10"
            >
            -
          </button>
          <span className="px-3 py-1">{amount}</span>
          <button
           onClick={increment}
           className="px-3 py-1 text-gray-600 transition dark:text-gray-400 hover:bg-gray-300/10">
            +
          </button>
        </div>
        <button onClick={handleRemove} className="text-red-500 transition p-3 rounded-md hover:bg-red-500/10 dark:hover:text-red-500">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

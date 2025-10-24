import React, { useContext, useState } from "react";
import { CartContext } from "../../../constants/CartContext";

const CheckoutProduct = ({ item }) => {
  const { removeFromBasket, updateAmount } = useContext(CartContext);

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
          Quantity: {item.amount}
        </p>
        <p className="mt-2 font-bold text-white">
          ₱{item.price}
        </p>
      </div>
    </div>
  );
};

export default CheckoutProduct;

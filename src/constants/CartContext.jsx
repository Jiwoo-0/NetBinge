import { createContext, useContext, useState, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = state.products;
    updatedBasket.push(product);

    updatePrice(updatedBasket);

    dispatch({
      type: "add",
      payload: updatedBasket,
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updatePrice(updatedBasket);

    dispatch({
      type: "remove",
      payload: updatedBasket,
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "update price",
      payload: total,
    });
  };

  const itemCount = state.products.length;

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    itemCount,
  };

  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>;
};

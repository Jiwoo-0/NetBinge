import { createContext, useContext, useState, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const addToBasket = (product) => {
  //   const updatedBasket = state.products;
  //   updatedBasket.push(product);

  //   updatePrice(updatedBasket);

  //   dispatch({
  //     type: "add",
  //     payload: updatedBasket,
  //   });
  // };

  const addToBasket = (product) => {
    let updatedBasket = [...state.products];
    const existingProductIndex = updatedBasket.findIndex(
      (p) => p.name === product.name
    );

    if (existingProductIndex !== -1) {
      updatedBasket[existingProductIndex].amount += 1;
    } else {
      updatedBasket.push({ ...product, amount: 1 });
    }

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

  // const updatePrice = (products) => {
  //   let total = 0;
  //   products.forEach((product) => {
  //     total += product.price;
  //   });

  //   dispatch({
  //     type: "update price",
  //     payload: total,
  //   });
  // };

  const updatePrice = (products) => {
    const total = products.reduce(
      (acc, product) => acc + product.price * product.amount,
      0
    );

    dispatch({
      type: "update price",
      payload: total,
    });
  };

  // const updateAmount = (product, newAmount) => {
  //   let updatedBasket;
  //   if (newAmount<= 0) {
  //     updatedBasket = state.products.filter((p)=>p.name !== product.name);
  //   } else {
  //     updatedBasket = state.products.map((p)=>p.name === product.name ? { ...p, amount: newAmount} : p);
  //   }

  //   updatePrice(updatedBasket);

  //   dispatch({
  //     type: "update amount",
  //     payload: updatedBasket,
  //   })
  // }

  const updateAmount = (product, newAmount) => {
    const updatedBasket = state.products.map((p) =>
      p.name === product.name ? { ...p, amount: newAmount } : p
    );

    updatePrice(updatedBasket);

    dispatch({
      type: "add", 
      payload: updatedBasket,
    });
  };

  const itemCount = state.products.length;

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    itemCount,
    updateAmount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

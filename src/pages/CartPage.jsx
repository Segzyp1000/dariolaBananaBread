import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { productArray } from "../App";

const CartPage = () => {
  const cart = useContext(CartContext);
  const totalCost = cart.getTotalCost(cart);

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.items.map((item, index) => {
        const productData = productArray.find(
          (product) => product.id === item.id
        );
        return (
          <div key={index}>
            <img src={productData.image} alt={productData.title} />
            <p>Quantity: {item.quantity}</p>
            <p>Price: {productData.price}</p>
            <p>Subtotal: {productData.price * item.quantity}</p>
          </div>
        );
      })}
      <p>Total Cost: {totalCost}</p>
    </div>
  );
};

export default CartPage;

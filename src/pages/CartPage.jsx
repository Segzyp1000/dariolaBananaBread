import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { productArray } from "../App";
import ChocolateChip from "../assets/chocolate-chip.jpeg";
import Oreos from "../assets/oreos.jpeg";
import Plain from "../assets/plain.jpeg";
import Mixed from "../assets/mixed-fruit.jpeg";
import Raisin from "../assets/raisin.jpeg";
import Marble from "../assets/marble.jpeg";
import Double from "../assets/double-chocolate.jpeg";
import Cashew from "../assets/cashew.jpeg";

const CartPage = () => {
  const cart = useContext(CartContext);
  const totalCost = cart.items.reduce((acc, current) => {
    const productData = productArray.find(
      (product) => product.id === current.id
    );
    return acc + productData.price * current.quantity;
  }, 0);

  const images = {
    "Oreos Banana Bread": Oreos,
    "Chocolate Banana Bread": ChocolateChip,
    "Plain Banana Bread": Plain,
    "Mixed Nuts Banana Bread": Mixed,
    "Raisin Banana Bread": Raisin,
    "Marble Banana Bread": Marble,
    "Double chocolate Banana": Double,
    "Cashew Banana Bread": Cashew,
  };

  const handlePurchase = () => {
    window.location.href = "https://paystack.com/pay/e12whklilw";
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-20 bg-navColor text-white w-auto rounded-lg p-auto">
      <div className="mx-auto">
        <h1 className="font-bold text-2xl  text-white mt-6 rounded-lg px-5">
          Shopping Cart
        </h1>
        {cart.items.map((item, index) => {
          const productData = productArray.find(
            (product) => product.id === item.id
          );
          return (
            <div key={index} className="mt-12 mx-auto font-lg">
              <img
                src={images[productData.title]}
                alt={productData.title}
                className="rounded-full mx-auto"
              />
              <p>Product: {productData.title} </p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₦{productData.price}.00</p>
              <p className="rounded-lg p-2 mt-3">
                Subtotal: ₦{productData.price * item.quantity}.00
              </p>
              <button
                onClick={() => cart.deleteFromCart(productData.id)}
                className="bg-removeColor text-white px-1 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          );
        })}
        <p className="bg-black text-white p-2 mt-12 rounded-lg mb-10 text-2xl font-bold">
          Total Cost: ₦{totalCost}.00
        </p>
        <button
          className="bg-addColor font-bold px-5 mb-5 rounded-lg text-black"
          onClick={handlePurchase}
        >
          {" "}
          Purchase Item{" "}
        </button>
      </div>
    </div>
  );
};

export default CartPage;

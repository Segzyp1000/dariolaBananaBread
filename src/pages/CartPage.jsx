import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { productArray } from "../App";
import ChocolateChip from "../assets/chocolatechip.jpeg";
import Oreos from "../assets/oreos.jpeg";
import Oatmeal from "../assets/Oatmeal.jpeg";
import Blueberry from "../assets/blueberry.jpeg";
import Raisin from "../assets/raisins.jpeg";
import Plain from "../assets/plain.jpeg";
import Pineapple from "../assets/pineapple.jpeg";
import Double from "../assets/doublechocolate.jpeg";
import { useNavigate } from "react-router-dom";

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
    "Chocolate-Chip Banana Bread": ChocolateChip,
    "OatMeal Banana Bread": Oatmeal,
    "Blueberry Banana Bread": Blueberry,
    "Raisin Banana Bread": Raisin,
    "Plain Banana Bread": Plain,
    "Pineapple Banana": Pineapple,
    "Double Chocolate Chip Banana Bread": Double,
  };

  const handlePurchase = () => {
    const navigate = useNavigate();
    navigate("https://paystack.com/pay/e12whklilw");
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-20  text-black w-auto rounded-lg p-auto">
      <div className="mx-auto">
        <h1 className="font-bold text-2xl  text-black mt-6 rounded-lg px-5">
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
                className="rounded-full mx-auto w-[232px] h-[162px]"
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
          Purchase Item
        </button>
      </div>
    </div>
  );
};

export default CartPage;

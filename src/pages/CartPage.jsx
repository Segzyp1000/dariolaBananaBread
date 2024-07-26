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
    <div className="flex flex-col mt-20  text-black mx-20 ">
      <h1 className="font-bold text-2xl  text-black mt-6 rounded-lg px-5">
        Shopping Cart
      </h1>
      {cart.items.map((item, index) => {
        const productData = productArray.find(
          (product) => product.id === item.id
        );
        return (
          <div
            key={index}
            className="mt-12 font-lg md:flex justify-between flex-col"
          >
            <div className="flex flex-col">
              <div className=" mx-12">
                <img
                  src={images[productData.title]}
                  alt={productData.title}
                  className="rounded-full w-[232px] h-[162px]"
                />
              </div>
              <div className=" mx-12">
                <p>Product: {productData.title} </p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₦{productData.price}.00</p>
                <p className="rounded-lg p-2 mt-3">
                  Subtotal: ₦{productData.price * item.quantity}.00
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => cart.deleteFromCart(productData.id)}
                className="bg-removeColor text-white px-1 mx-12 rounded-lg flex items-center"
              >
                Remove
              </button>
            </div>
            <div className="border-b border-black mt-20 w-auto"></div>
          </div>
        );
      })}
      <div className="max-w-full  flex flex-col ">
        <div>
          <button className="bg-red-600 text-white px-5 mt-12 rounded-lg mb-10 text-2xl font-bold">
            Total Cost: ₦{totalCost}.00
          </button>
        </div>
        <div>
          <button
            className="bg-blue-700 font-bold px-5 mb-5 rounded-lg text-white"
            onClick={handlePurchase}
          >
            Purchase Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

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
  const navigate = useNavigate();
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
    alert("Your item is being processed");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="container mx-auto  mt-20 ml-12 mb-12 block space-y-12">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800mb-6 mt-10">
        Your Cart
      </h1>
      {cart.items.length > 0 ? (
        <div>
          {cart.items.map((item, index) => {
            const productData = productArray.find(
              (product) => product.id === item.id
            );
            return (
              <div
                key={index}
                className="mt-12 font-lg md:flex justify-between items-center"
              >
                <div className="flex">
                  <div className="mx-2">
                    <img
                      src={images[productData.title]}
                      alt={productData.title}
                      className="w-[150px] h-[132px]"
                    />
                  </div>
                  <div className="mx-2">
                    <p>Product: {productData.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₦{productData.price}.00</p>
                    <p className="rounded-lg p-2 mt-3">
                      Subtotal: ₦{productData.price * item.quantity}.00
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mt-10 space-x-2">
                  <button
                    onClick={() => cart.addOneToCart(item.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button className="bg-white text-black px-2 py-1 rounded">
                    {item.quantity}
                  </button>
                  <button
                    onClick={() => cart.removeOneFromCart(item.id)}
                    className="bg-navColor text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => cart.deleteFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
                <div className="border-b border-black mt-20 w-auto"></div>
              </div>
            );
          })}

          <div className="flex flex-col flex-start items-start w-auto ">
            <button className="text-black px-1 mt-12 rounded-lg mb-10 text-2xl font-bold">
              Total Cost: ₦{totalCost}.00
            </button>
            <button
              onClick={handlePurchase}
              className="bg-blue-700 font-bold px-1 mb-5 rounded-lg text-white"
            >
              Purchase Item
            </button>
          </div>
        </div>
      ) : (
        <p className=" space-y-12">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

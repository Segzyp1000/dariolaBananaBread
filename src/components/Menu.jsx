import React, { useContext } from "react";
import ChocolateChip from "../assets/chocolatechip.jpeg";
import Oreos from "../assets/oreos.jpeg";
import Oatmeal from "../assets/Oatmeal.jpeg";
import Blueberry from "../assets/blueberry.jpeg";
import Raisin from "../assets/raisins.jpeg";
import Plain from "../assets/plain.jpeg";
import Pineapple from "../assets/pineapple.jpeg";
import Double from "../assets/doublechocolate.jpeg";
import { CartContext } from "../CartContext";
import { productArray } from "../App";

const Menu = () => {
  const cart = useContext(CartContext);
  const productImages = {
    "Oreos Banana Bread": Oreos,
    "Chocolate-Chip Banana Bread": ChocolateChip,
    "OatMeal Banana Bread": Oatmeal,
    "Blueberry Banana Bread": Blueberry,
    "Raisin Banana Bread": Raisin,
    "Plain Banana Bread": Plain,
    "Pineapple Banana": Pineapple,
    "Double Chocolate Chip Banana Bread": Double,
  };

  return (
    <div id="menu">
      <div className="text-4xl font-bold flex justify-start items-center px-12 mt-20 mx-12">
        Our Menu
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-3/4 mx-auto">
        {productArray.map((product, idx) => {
          const productQuantity = cart.getProductQuantity(product.id);
          return (
            <div key={idx} className="shadow-lg  border-black p-5 gap-3 ">
              <img
                src={productImages[product.title]}
                alt={product.title}
                className="bg-slate-400 mb-4 w-[232px] h-[162px]"
              />

              <h1 className="flex justify-start">{product.title}</h1>
              <p className="font-bold">₦{product.price}</p>

              <button
                onClick={() => cart.addOneToCart(product.id)}
                className="bg-red-600 text-white px-1 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

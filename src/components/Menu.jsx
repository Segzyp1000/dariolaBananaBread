import React, { useContext } from "react";
import ChocolateChip from "../assets/chocolate-chip.jpeg";
import Oreos from "../assets/oreos.jpeg";
import Plain from "../assets/plain.jpeg";
import Mixed from "../assets/mixed-fruit.jpeg";
import Raisin from "../assets/raisin.jpeg";
import Marble from "../assets/marble.jpeg";
import Double from "../assets/double-chocolate.jpeg";
import Cashew from "../assets/cashew.jpeg";
import { CartContext } from "../CartContext";
import { productArray } from "../App";

const Menu = () => {
  const cart = useContext(CartContext);
  const productImages = {
    "Oreos Banana Bread": Oreos,
    "Chocolate Banana Bread": ChocolateChip,
    "Plain Banana Bread": Plain,
    "Mixed Nuts Banana Bread": Mixed,
    "Raisin Banana Bread": Raisin,
    "Marble Banana Bread": Marble,
    "Double chocolate Banana": Double,
    "Cashew Banana Bread": Cashew,
  };

  return (
    <div id="menu">
      <div className="text-4xl font-bold flex justify-start items-center px-12 mt-20">
        Our Menu
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-3/4 mx-auto">
        {productArray.map((product, idx) => {
          const productQuantity = cart.getProductQuantity(product.id);
          return (
            <div key={idx} className="shadow-lg w-auto border-black p-5 gap-3 ">
              <img
                src={productImages[product.title]}
                alt={product.title}
                className="w-auto h-auto rounded-full mb-4"
              />

              <h1 className="flex justify-start">{product.title}</h1>
              <p className="font-bold">₦{product.price}</p>

              {productQuantity > 0 ? (
                <>
                  <form>
                    <label htmlFor="add" className="text-navColor">
                      Add Item:{productQuantity}
                    </label>
                    <button
                      type="button"
                      href="#"
                      onClick={() => cart.addOneToCart(product.id)}
                      className="bg-addColor text-white px-2 ml-8"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      href="#"
                      onClick={() => cart.removeOneFromCart(product.id)}
                      className="bg-black text-white px-2"
                    >
                      -
                    </button>
                  </form>
                  <button
                    onClick={() => cart.deleteFromCart(product.id)}
                    className="bg-removeColor text-white px-1 mt-2 rounded-lg"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="bg-navColor text-white p-3 rounded-lg"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

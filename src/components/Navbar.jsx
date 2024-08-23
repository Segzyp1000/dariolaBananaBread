import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HotPot from "../assets/HotPot.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";

const Navbar = (props) => {
  const cart = useContext(CartContext);

  const productCount =
    cart.items.length > 0
      ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
      : "";

  return (
    <div className="navb bg-blue-500 w-full block fixed">
      <nav className="flex justify-between  items-center p-2 mx-0 md:mx-10">
        <div>
          <Link to="/" className="flex space-x-1">
            <img src={HotPot} alt="" />
            <h1 className="text-white font-bold">Dariola Bakery</h1>
          </Link>
        </div>

        <div className="flex">
          <Link to="/contact" className="text-white hover:text-slate-400">
            Order
          </Link>

          <Link
            to="/cartpage"
            className="px-1 mx-2 rounded-lg bg-navColor text-white hover:text-black flex gap-2"
          >
            <span className="flex bg-white text-blue-800 rounded-lg p-1">
              <FaShoppingCart /> {productCount}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

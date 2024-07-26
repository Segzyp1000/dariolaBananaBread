import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HotPot from "../assets/HotPot.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";

const Navbar = (props) => {
  const cart = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <nav className="flex justify-between items-center p-3 mx-0 md:mx-12">
      <div className="flex space-x-6">
        <img src={HotPot} alt="" />
        <h1 className="text-navColor font-bold">Dariola Bakery</h1>
      </div>

      <div className="hidden space-x-6 mx-12 p-5 md:flex">
        <Link to="/" className="text-navColor font-bold hover:text-slate-400">
          Home
        </Link>

        <Link to="/contact" className="hover:text-slate-400">
          Order
        </Link>

        <Link
          to="/cartpage"
          className="px-1 mx-2 rounded-lg bg-navColor text-white hover:text-black flex gap-2"
        >
          <FaShoppingCart className="mt-1" /> ({productCount} items)
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-navColor mx-6 font-bold focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4  text-navColor">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>

          <Link
            to="/cartpage"
            className="px-1 rounded-lg bg-navColor text-white hover:text-black"
          >
            <FaShoppingCart className="mt-1" /> ({productCount} items)
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

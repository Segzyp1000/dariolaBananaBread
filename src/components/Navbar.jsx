import React, { useState } from "react";
import { Link } from "react-router-dom";
import HotPot from "../assets/HotPot.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-3">
      <div className="flex space-x-2">
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
          to="/signup"
          className="px-2 rounded-lg bg-navColor text-white hover:text-black"
        >
          Cart
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
        <div className="md:hidden flex flex-col space-y-4   rounded-lg text-navColor">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/signup" className="p-2 rounded-lg text-white bg-navColor">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

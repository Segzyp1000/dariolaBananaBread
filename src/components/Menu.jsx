import React from "react";
import ChocolateChip from "../assets/chocolate-chip.jpeg";
import Oreos from "../assets/oreos.jpeg";
import Plain from "../assets/plain.jpeg";
import Mixed from "../assets/mixed-fruit.jpeg";
import Raisin from "../assets/raisin.jpeg";
import Marble from "../assets/marble.jpeg";
import Double from "../assets/double-chocolate.jpeg";
import Cashew from "../assets/cashew.jpeg";

const Menu = () => {
  return (
    <div>
      <div className="text-4xl font-bold flex justify-start items-center px-12 mt-20">
        Our Menu
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-3/4 mx-auto">
        <div className="bg-white shadow-lg text-black p-3 border-2 border-slate-200 rounded-lg">
          <span>
            <img src={Oreos} alt="" className="rounded-full p-6" />
            <p className="flex justify-start">Oreos Banana Bread</p>
            <p className="font-bold">N14,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg text-black p-3  border-2 border-slate-200 rounded-lg">
          <span>
            <img src={ChocolateChip} alt="" className="rounded-full p-6" />
            <p>Chocolate Chips Banana Bread</p>
            <p className="font-bold">N12,500</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg  text-black p-3  border-2 border-slate-200 rounded-lg">
          <span>
            <img src={Plain} alt="" className="rounded-full p-6" />
            <p>Plain Banana Bread</p>
            <p className="font-bold">N10,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg  text-black p-3  border-2 border-slate-200 rounded-lg">
          <span>
            <img src={Mixed} alt="" className="rounded-full p-6" />
            <p>Mixed Nuts Banana Bread</p>
            <p className="font-bold">N11,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg  text-black p-3  border-2 border-slate-200rounded-lg">
          <span>
            <img src={Raisin} alt="" className="rounded-full p-6" />
            <p>Raisin Banana Bread</p>
            <p className="font-bold">N9,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg  text-black p-3  border-2 border-slate-200 rounded-lg">
          <span>
            <img src={Marble} alt="" className="rounded-full p-6" />
            <p>Marble Banana Bread</p>
            <p className="font-bold">N24,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg  text-black p-3 border-2 border-slate-200 rounded-lg">
          <span>
            <img src={Double} alt="" className="rounded-full p-6" />
            <p>Double chocolate Banana Bread</p>
            <p className="font-bold">N18,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
        <div className="bg-white shadow-lg  text-black p-3  border-2 border-slate-200 rounded-lg">
          <span>
            <img src={Cashew} alt="" className="rounded-full p-6" />
            <p>Cashew Banana Bread</p>
            <p className="font-bold">N14,000</p>
            <button className="bg-navColor text-white  p-3 rounded-lg">
              Add +
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;

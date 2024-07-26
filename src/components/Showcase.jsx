import React from "react";
import Banana from "../assets/banana.jpg";

const Showcase = () => {
  return (
    <div className="flex flex-col-reverse gap-6 md:flex-row mt-20 justify-between items-center mx-12">
      <div>
        <span>
          <h1 className="font-bold text-3xl w-auto">
            Treat Yourself to the
            <p className="text-navColor bread">Best Banana Bread </p>In Nigeria-
            Conviently <p>Delivered to Your Home or Office</p>
          </h1>
        </span>
        <p className="mt-3 py-4 w-auto">
          Our job is to filling your tummy with delicious banana bread and
          <p>with fast and free delivery</p>
        </p>

        <a
          href="#menu"
          className="p-2 rounded-lg bg-navColor text-white  hover:text-black"
        >
          Get Started
        </a>
      </div>
      <div>
        <img src={Banana} alt="" />
      </div>
    </div>
  );
};

export default Showcase;

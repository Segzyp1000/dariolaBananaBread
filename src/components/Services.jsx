import React from "react";
import Order from "../assets/Order food-pana 1.png";
import Free from "../assets/Take Away-rafiki 1.png";
import Waiter from "../assets/Waiters-rafiki 1.png";

const Services = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center mt-24 w-full px-4 md:px-12"
      id="services"
    >
      <div>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
          What we serve:
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 mt-10 w-full">
        <div className="flex flex-col items-center max-w-xs">
          <img
            src={Order}
            alt="Order"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mt-5"
          />
          <p className="mt-8 font-semibold text-lg text-gray-700">
            Easy to order
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            You only need a few steps in ordering our bread
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <img
            src={Free}
            alt="Fast Delivery"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mt-5"
          />
          <p className="mt-8 font-semibold text-lg text-gray-700">
            Fastest Delivery
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Delivery that is always on time, even faster
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <img
            src={Waiter}
            alt="Best Quality"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mt-5"
          />
          <p className="mt-8 font-semibold text-lg text-gray-700">
            Best Quality
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Not only fast, for us, quality is also number one
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

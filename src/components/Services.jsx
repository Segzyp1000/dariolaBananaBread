import React from "react";
import Order from "../assets/Order food-pana 1.png";
import Free from "../assets/Take Away-rafiki 1.png";
import Waiter from "../assets/Waiters-rafiki 1.png";

const Services = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center text-center mt-20 w-auto mx-12"
      id="services"
    >
      <div>
        <h2 className="font-bold text-3xl">What we serve:</h2>
      </div>
      <div className="flex justify-between space-x-12 max-w-full flex-wrap mt-10">
        <div className="md:w-[367px] w-auto md:ml-0 ml-10 h-auto md:h-[346px]">
          <img src={Order} alt="" />
          <p className="mt-10 font-semibold">Easy to order</p>
          <p>You only need a few steps in ordering our bread</p>
        </div>

        <div className="md:w-[394px] w-auto h-auto md:h-[346px]">
          <img src={Free} />
          <p className="mt-10 font-semibold">Fastest Delivery</p>
          <p>Delivery that is always ontime even faster</p>
        </div>

        <div className="md:w-[359px] w-auto h-auto md:h-[346px]">
          <img src={Waiter} alt="" />
          <p className="mt-10 font-semibold">Best Quality</p>
          <p>Not only fast for us quality is also number one</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

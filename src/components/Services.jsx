import React from "react";
import Order from "../assets/Order food-pana 1.png";
import Free from "../assets/freepik--Character--inject-8.png";
import Waiter from "../assets/Waiters-rafiki 1.png";

const Services = () => {
  return (
    <div className=" flex flex-col mt-20 w-auto" id="services">
      <div className="flex justify-center items-center">
        <h2 className="font-bold text-3xl">What we serve:</h2>
      </div>
      <div className="flex flex-wrap mt-10 justify-center items-center space-x-6 mx-auto">
        <div>
          <img src={Order} alt="" />
          <p className="mt-10 font-bold">Easy to order</p>
          <p>You only need a few steps in ordering our bread</p>
        </div>
        <div>
          <img src={Free} alt="" />
          <p className="mt-10 font-bold">Fastest Delivery</p>
          <p>Delivery that is always ontime even faster</p>
        </div>
        <div>
          <img src={Waiter} alt="" />
          <p className="mt-10 font-bold">Best Quality</p>
          <p>Not only fast for us quality is also number one</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

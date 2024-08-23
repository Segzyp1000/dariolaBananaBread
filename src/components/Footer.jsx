import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white mt-24">
      <div className="container mx-auto flex justify-between items-center py-7">
        <div>
          <p className="text-sm md:font-normal font-light">
            &copy; 2024 Dariola Bakery
          </p>
        </div>
        <div className="flex md:space-x-6 space-x-3">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

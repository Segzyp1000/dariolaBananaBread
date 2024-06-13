import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-navColor text-white flex justify-between items-center mt-20 max-w-full">
      <div>
        <p className="p-2 ml-12">© 2024 Dariola Bakery coded by SegzyP</p>
      </div>
      <div className="flex mx-12 space-x-5">
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
  );
};

export default Footer;

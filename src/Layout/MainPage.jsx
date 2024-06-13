import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainPage;

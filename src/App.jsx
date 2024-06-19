import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainPage from "./Layout/MainPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SignupPage from "./pages/SignupPage";
import CartProvider from "./CartContext";

export const productArray = [
  { id: 1, title: "Oreos Banana Bread", price: 14000 },
  { id: 2, title: "Chocolate Banana Bread", price: 12500 },
  { id: 3, title: "Oreos Banana Bread", price: 14000 },
  { id: 4, title: "Plain Banana Bread", price: 10000 },
  { id: 5, title: "Mixed Nuts Banana Bread", price: 11000 },
  { id: 6, title: "Raisin Banana Bread", price: 9000 },
  { id: 7, title: "Double chocolate Banana", price: 18000 },
  { id: 8, title: "Cashew Banana Bread", price: 14000 },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <CartProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
};

export default App;

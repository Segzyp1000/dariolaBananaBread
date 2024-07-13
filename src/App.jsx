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
import CartPage from "./pages/CartPage";
import CartProvider from "./CartContext";

export const productArray = [
  { id: 1, title: "Oreos Banana Bread", price: 14000 },
  { id: 2, title: "Chocolate-Chip Banana Bread", price: 12500 },
  { id: 3, title: "OatMeal Banana Bread", price: 17000 },
  { id: 4, title: "Blueberry Banana Bread", price: 10000 },
  { id: 5, title: "Plain Banana Bread", price: 11000 },
  { id: 6, title: "Raisin Banana Bread", price: 9000 },
  { id: 7, title: "Double Chocolate Chip Banana Bread", price: 18000 },
  { id: 8, title: "Pineapple Banana", price: 14000 },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cartpage" element={<CartPage />} />
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

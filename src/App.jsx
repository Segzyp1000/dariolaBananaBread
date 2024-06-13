import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import { CartProvider } from "./CartContext";
import MainPage from "./Layout/MainPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SignupPage from "./pages/SignupPage";

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
      <RouterProvider router={router} />;
    </CartProvider>
  );
};

export default App;

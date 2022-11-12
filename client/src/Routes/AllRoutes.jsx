import React from "react";
import { Route, Routes } from "react-router-dom";
import DressesPage from "../pages/DressesPage";
import ProductPage from "../pages/ProductPage";
import ProductsDetails from "../pages/ProductsDetailsPage";
import Signup from "../pages/Signup";
import { Navbar } from "../components/Navbar/Navbar";
import CheckoutPage from "../pages/CheckoutPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import CartPage from "../pages/CartPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/shoes" element={<ProductPage />} />

        <Route path="/dresses" element={<DressesPage />} />

        <Route path="/products/:productId" element={<ProductsDetails />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout/shipping-address" element={<CheckoutPage />} />

        <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

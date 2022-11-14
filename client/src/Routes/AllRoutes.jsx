import React from "react";
import { Route, Routes } from "react-router-dom";
import DressesPage from "../pages/DressesPage";
import ProductPage from "../pages/ProductPage";
import ProductsDetails from "../pages/ProductsDetailsPage";
import CheckoutPage from "../pages/CheckoutPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../Admin/AdminPage";
import HomeLivingPage from "../pages/HomeLivingPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoes" element={<ProductPage />} />
        <Route path="/dresses" element={<DressesPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout/shipping-address" element={<CheckoutPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
        <Route path="/homeliving" element={<HomeLivingPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

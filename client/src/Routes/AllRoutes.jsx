import React from "react";
import { Route, Routes } from "react-router-dom";
import DressesPage from "../pages/DressesPage";
import ProductPage from "../pages/ProductPage";
import ProductsDetails from "../pages/ProductsDetailsPage";
import Signup from "../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/shoes" element={<ProductPage />} />

      <Route path="/dresses" element={<DressesPage />} />

      <Route path="/products/:productId" element={<ProductsDetails />} />

      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;

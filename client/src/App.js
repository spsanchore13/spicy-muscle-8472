import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";

import ProductsDetails from "./pages/ProductsDetailsPage";

import Signup from "./pages/Signup";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductPage />} />

        <Route path="/products/:productId" element={<ProductsDetails />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import ProductsDetails from "./pages/ProductsDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

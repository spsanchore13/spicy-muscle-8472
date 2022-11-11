import { Route, Routes } from "react-router-dom";
import AdminPage from "./Admin/AdminPage";
import "./App.css";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

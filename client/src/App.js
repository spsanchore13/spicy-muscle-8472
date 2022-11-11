

import AllRoutes from "./Routes/AllRoutes";

import Home from './components/Home/Home';
import Home2 from './components/Home2/Home2';
import {Navbar} from './components/Navbar/Navbar';








import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";

import ProductsDetails from "./pages/ProductsDetailsPage";

import Signup from "./pages/Signup";



function App() {
  return (


    
     

     

    <div className="App">
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home2" element={<Home2/>}/>
        <Route path="/products" element={<ProductPage />} />


        <Route path="/products/:productId" element={<ProductsDetails />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>

    <div className="App">
          <Navbar/>
      <AllRoutes />

    </div>
    </div>
  );
}

export default App;

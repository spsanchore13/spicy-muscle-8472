
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar';







import ProductPage from "./pages/ProductPage";

import ProductsDetails from "./pages/ProductsDetailsPage";

import Signup from "./pages/Signup";


function App() {
  return (

    <div>
      <Navbar/>

      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
     

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

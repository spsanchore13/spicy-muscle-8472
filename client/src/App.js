
import "./App.css";

import Login from "./pages/Login";
import AllRoutes from "./Routes/AllRoutes";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar';








import ProductPage from "./pages/ProductPage";

import ProductsDetails from "./pages/ProductsDetailsPage";

import Signup from "./pages/Signup";



function App() {
  return (
    <div className="App">

    
      <Navbar/>
      <AllRoutes />

    </div>
  );
}

export default App;

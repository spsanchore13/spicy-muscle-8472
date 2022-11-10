import React from 'react'
import {Route, Routes} from "react-router-dom"
import Footer from '../Footer/Footer'
// import Cart from '../Components/Cart'
// import CartAdd from '../Components/CartAdd'
// import Cartpage from '../Components/Cartpage'
// import OrderSummary from '../Components/OrderSummary'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
<Route path={"/footer"} element={<Footer />} />


      </Routes>
    </div>
  )
}

export default AllRoutes

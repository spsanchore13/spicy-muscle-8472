import React from 'react'
import { Route, Routes } from "react-router-dom"
import Footer from '../Footer/Footer'
import Productpage from '../Components/Productpage'




const AllRoutes = () => {
  return (
    <div>
      <Routes>
        
       <Route path={"/"} element={<Footer />}/>
       <Route path={"/productpage"} element={<Productpage />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes

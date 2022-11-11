import React from 'react'
import { Route, Routes } from "react-router-dom"
import Footer from '../Footer/Footer'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        
       <Route path={"/"} element={<Footer />}/>
        


      </Routes>
    </div>
  )
}

export default AllRoutes

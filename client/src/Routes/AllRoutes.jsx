import React from 'react'
import { Route, Routes } from "react-router-dom"
// import Filter from '../Components/Filter'
// import Productpage from '../Components/Productpage'
import Footer from '../Footer/Footer'
import Tri from '../Footer/Tri'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Productpage />} />
        <Route path={"/footer"} element={<Footer />} />
        <Route path={"/tri"} element={<Tri />} />

        <Route path={"/filter"} element={<Filter />} />

      </Routes>
    </div>
  )
}

export default AllRoutes

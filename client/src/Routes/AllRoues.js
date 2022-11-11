import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import PaymentSuccessPage from '../pages/PaymentSuccessPage'

const AllRoues = () => {
    return (
        <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout/shipping-address" element={<CheckoutPage />} />
            <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
        </Routes>
    )
}

export default AllRoues
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../Pages/LandingPage/LandingPage'
import ProductPage from '../../Pages/ProductPage/ProductPage'

import LoginSignup from '../../Pages/LoginSignUp/LoginSignup'
import Cart from '../../Pages/Cart/Cart'
import SignUpPage from '../../Pages/SignUpPage/SignUpPage'
import Navbar from '../Navbar/Navbar'
import ListingPage from '../../Pages/ListingPage/ListingPage'
import AdminPage from '../../Pages/AdminPage/AdminPage'


function AllRoutes() {
  return (
    <>
    <Navbar/>
    <Routes> 
        <Route path='/' element={<SignUpPage/>}/>
        {/* <Route path='land' */}
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/shop' element={<ListingPage/>}/>
        <Route path='/men' element={<LandingPage/>}/>
        <Route path='/women' element={<LandingPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>

        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
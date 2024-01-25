import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import LoginSignup from '../../Pages/LoginSignUp/LoginSignup'
import Cart from '../../Pages/Cart/Cart'
import SignUpPage from '../../Pages/SignUpPage/SignUpPage'

import Shop from '../../Pages/Shop'
import Navbar from '../Navbar/Navbar'


function AllRoutes() {
  return (
    <>
    <Navbar/>
    <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/men' element={<HomePage/>}/>
        <Route path='/women' element={<HomePage/>}/>
        <Route path='/kids' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>

        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
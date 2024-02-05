import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../Pages/LandingPage/LandingPage'
import ProductPage from '../../Pages/ProductPage/ProductPage'

import LoginSignup from '../../Pages/LoginSignUp/LoginSignup'
import Cart from '../../Pages/Cart/Cart'
import SignUpPage from '../../Pages/SignUpPage/SignUpPage'
import Navbar from '../Navbar/Navbar'
import ListingPage from '../../Pages/ListingPage/ListingPage'
import AdminPage from '../../Pages/AdminPage/AdminPage'
import Dashboard from '../../Pages/Dashboard/Dashboard'


function AllRoutes() {
  const publicRouter = [
    {
      path: "/*",
      component: <LoginSignup />
    },
    {
      path: "/signup",
      component: <SignUpPage />
    }
  ]
  const privateRouter = [
    {
      path: "/land",
      component: <LandingPage />
    },
    {
      path: "/product",
      component: <ProductPage />
    },
    {
      path: "/shop",
      component: <LandingPage />
    },
    {
      path: "/women",
      component: <LandingPage />
    },
    {
      path: "/men",
      component: <LandingPage />
    },
    // {
    //   path: "/admin",
    //   component: <Dashboard />
    // },
    {
      path: "/cart",
      component: <Cart />
    },
  ]

  const adminRoute = [
    {
      path: "/admin",
      component: <Dashboard />
    },
  ]

  const [user, setUser] = useState();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>setUser(userInfo.role) )
  // console.log(userInfo.role,"userinfo in route")
  // setUser(userInfo.role)


  return (
    <>
      <Navbar />
      <Routes>
        {!user && publicRouter.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
        {user && privateRouter.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
        {user === 'admin' && adminRoute.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
        {/* <Route path='/' element={<SignUpPage/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/shop' element={<ListingPage/>}/>
        <Route path='/men' element={<LandingPage/>}/>
        <Route path='/women' element={<LandingPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/> */}
      </Routes>
    </>
  )
}

export default AllRoutes
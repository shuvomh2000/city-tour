import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/Navbars/Navbars'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
    <Navbars/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout
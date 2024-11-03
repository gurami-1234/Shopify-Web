import React from 'react'
import {  Footer, Navbar } from 'components'
import './MainLayout.css'
import ProductsLayout from 'layouts/ProductsLayout/ProductsLayout'
const MainLayout = () => {
  return (
    <div className='main-layout'>
        <Navbar/>
        <ProductsLayout title={'Trending Products'}/>
        <Footer/>
    </div>
  )
}

export default MainLayout
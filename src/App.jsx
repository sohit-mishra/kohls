import React from 'react'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import AllRoutes from './Router/AllRoutes';

export default function App() {
  return (
    <>
      <Navbar/>
         <AllRoutes/>
      <Footer/>
    </>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Homepage'
import Landing_page from './components/ecommerce/Landing_page'
import Shopping_page from './components/ecommerce/Shopping_page'
import ShoppingCart_page from './components/ecommerce/ShoppingCart_page'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      {/* <Shopping_page /> */}
      <BrowserRouter>
        <Routes>
          <Route path="https://net-binge.vercel.app/" element={<Landing_page />}></Route>
          <Route path="https://net-binge.vercel.app/shop" element={<Shopping_page />}></Route>
          <Route path="https://net-binge.vercel.app/cart" element={<ShoppingCart_page />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

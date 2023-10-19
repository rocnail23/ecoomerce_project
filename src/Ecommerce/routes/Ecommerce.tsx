import { Route, Routes,Navigate } from "react-router"
import { Navbar } from "../components/Navbar"
import HomePage from "../pages/Homepage"
import SearchPage from "../pages/SearchPage"
import { Cart } from "../components/Cart"
import { ProductPage } from "../pages/ProductPage"
import { useState } from 'react';

const info = ["Facebook", "Twiter","Instegram", "LinkdIn"]

export const Ecommerce = () => {



  return (
    <>
    <Navbar/>
    <Cart/>
    <div className="container">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
    </div>
    <footer className="bg-g">
      <ul>
        {info.map(data => (
          <li className="teko">{data}</li>
        ))}
      </ul>
    </footer>
    </>
  )
}

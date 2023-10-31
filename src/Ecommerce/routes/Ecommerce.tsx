import { Route, Routes,Navigate } from "react-router"
import { Navbar } from "../components/Navbar"
import HomePage from "../pages/Homepage"
import SearchPage from "../pages/SearchPage"
import { Cart } from "../components/Cart"
import { ProductPage } from "../pages/ProductPage"
import UserRouter from "./UserRouter"
import useProduct from "../hooks/useProduct"
import {useEffect} from "react"


const info = ["Facebook", "Twiter","Instegram", "LinkdIn"]

export const Ecommerce = () => {

  const {getProducts} = useProduct()

  useEffect(() => {
    
   getProducts()

  }, [])
  

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
        <Route path="/user/*" element={<UserRouter/>} />
    </Routes>
    </div>
    <footer className="bg-g">
      <ul>
        {info.map(data => (
          <li key={data} className="teko">{data}</li>
        ))}
      </ul>
    </footer>
    </>
  )
}

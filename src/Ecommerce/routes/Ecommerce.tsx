import { Route, Routes,Navigate } from "react-router"
import { Navbar } from "../components/Navbar"
import HomePage from "../pages/Homepage"
import SearchPage from "../pages/SearchPage"
import { Cart } from "../components/Cart"
import { ProductPage } from "../pages/ProductPage"
import UserRouter from "./UserRouter"
import { useWish } from "../hooks/useWish"
import useProduct from "../hooks/useProduct"
import useCart from "../hooks/useCart"
import { useEffect} from 'react';
import { useAuth } from "../../Auth/hooks/useAuth"
import { usePurchase } from "../hooks/usePurchase"






const info = ["Facebook", "Twiter","Instegram", "LinkdIn"]

export const Ecommerce = () => {

  const {getWishProducts} = useWish()
  const {getProducts} = useProduct()
  const {getCart} = useCart()
  const {state} = useAuth()
  const {getPurchase} = usePurchase()
  useEffect(() => {
   
    getProducts()
    
    if(state != "authenticated") return
    getWishProducts()
    getCart()
    getPurchase()
  },[state])
    
 
  
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


import { Route, Routes,Navigate } from "react-router"
import { Navbar } from "../components/Navbar"
import HomePage from "../pages/Homepage"
import SearchPage from "../pages/SearchPage"
import { Cart } from "../components/Cart"


export const Ecommerce = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <div className="container">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
    </div>
    <footer>
      
    </footer>
    </>
  )
}

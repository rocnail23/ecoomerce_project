import { Route, Routes,Navigate } from "react-router"
import { SideBar } from "../layout/SideBar"
import { UserPage } from "../pages/UserPage"
import { WishesPage } from "../pages/WishesPage"
import { CartPage } from "../pages/CartPage"
import { PurcharsePage } from "../pages/PurcharsePage"
import "../styles/UserRouter.css"

const UserRouter = () => {
  return (
   <>
   <SideBar/>
    <div className="userRouter">
    
      <Routes>
        <Route  path="/info" element={<UserPage/>} />
        <Route  path="/wishes" element={<WishesPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/purchases" element={<PurcharsePage/>} />
        <Route path="/*" element={<Navigate to="/user/info"/>} />
      </Routes>
    </div>
    </>
  )
}

export default UserRouter
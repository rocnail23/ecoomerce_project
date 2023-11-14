import { Route, Routes,Navigate } from "react-router"
import { SideBar } from "../layout/SideBar"
import { UserPage } from "../pages/UserPage"
import { WishesPage } from "../pages/WishesPage"
import { CartPage } from "../pages/CartPage"
import { PurcharsePage } from "../pages/PurcharsePage"
import "../styles/UserRouter.css"
import { useAuth } from "../../Auth/hooks/useAuth"
import { AdminPage } from "../pages/AdminPage"



const UserRouter = () => {

  const {state} = useAuth()


  return (
   <>
   <SideBar/>
    <div className="userRouter">
    
      <Routes>
        {state === "authenticated"
        ? (
          <>
          <Route path="/admin/*"  element={<AdminPage/>}/>
          <Route  path="/info" element={<UserPage/>} />
          <Route  path="/wishes" element={<WishesPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/purchases" element={<PurcharsePage/>} />
          <Route path="/*" element={<Navigate to="/user/info"/>} />
          </>
        )
      : (
        <Route path="/*" element={<Navigate to="/"/>} />
      )}
       
      </Routes>
    </div>
    </>
  )
}

export default UserRouter
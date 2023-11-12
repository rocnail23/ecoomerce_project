import { Route, Routes, Navigate } from "react-router-dom"
import "../styles/AuthPage.css"
import { VeryfyUserPage } from "../Pages/VeryfyUserPage"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage"


const AuthRoute = () => {
  
  return (
        
        <div className="form_container">
            <div className="form_container_img">
            </div>
            <div className="form_container_form">
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="verifyUser/:code" element={<VeryfyUserPage/>} />
                <Route path="/*" element={<Navigate to="login"/>} />
            </Routes>
            </div>
        </div>
    
  )
}

export default AuthRoute
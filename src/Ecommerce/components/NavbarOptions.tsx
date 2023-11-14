import {Link, useNavigate} from "react-router-dom"
import "../styles/NavBarOptions.css"
import useCart from "../hooks/useCart"
import { useAuth } from "../../Auth/hooks/useAuth"
import axiosClient from "../../apis/axiosclient"


const NavbarOptions = () => {

  const {switchCard} = useCart()
  const navigate = useNavigate()
  const {state,sendMessageFromServer,startOnlogout} = useAuth()
  
  const navigateToDashboard = () => {
    if(state != "authenticated"){
      sendMessageFromServer({message:"you need to be login",category:"secondary_alert"})
    }else{
      navigate("/user/info")
    }

  }

  const handleLogout = async() => {
    const token = localStorage.getItem("token")
    if(token){
      localStorage.removeItem("token")
    }else{
     await axiosClient("/user/logout",{withCredentials:true})
    }
    startOnlogout()
  } 

  return (
    <div className="navOptions">
      {state == "authenticated"
      ?(
        <button onClick={handleLogout} className="btn-black btn_login teko">onLogout</button>
      )
      :(
        <Link to={"/welcome/login"}  className="btn-black btn_login teko animate__animated animate__fadeIn">login/register</Link>
      )}
       
       <button className="btn-hover link"><Link to="/search">
        <i className='bx bx-search bx-sm filter_icon'></i>
        </Link></button>
        <button onClick={navigateToDashboard} className="btn-hover link">
        <i className='bx bx-user bx-sm'></i>
        </button>
        <button onClick={switchCard}  className="btn-hover link" >
        <i className='bx bxs-shopping-bag bx-sm'></i>
        </button>
    </div>
  )
}

export default NavbarOptions
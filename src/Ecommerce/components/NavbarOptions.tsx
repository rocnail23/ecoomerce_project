import {Link} from "react-router-dom"
import "../styles/NavBarOptions.css"
import useCart from "../hooks/useCart"


const NavbarOptions = () => {

  const {switchCard} = useCart()
  

  return (
    <div className="navOptions">
       <Link to="/search" className="btn-hover link">
        <i className='bx bx-search bx-sm filter_icon'></i>
        </Link>
        <Link to="user/info" className="btn-hover link">
        <i className='bx bx-user bx-sm'></i>
        </Link>
        <button onClick={switchCard}  className="btn-hover link">
        <i className='bx bxs-shopping-bag bx-sm'></i>
        </button>
    </div>
  )
}

export default NavbarOptions
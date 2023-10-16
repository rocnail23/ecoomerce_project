import {Link} from "react-router-dom"
import "../styles/NavBarOptions.css"

const NavbarOptions = () => {
  return (
    <div className="navOptions">
       <Link  to="/search" className="btn-hover">
        <i className='bx bx-search bx-sm filter_icon'></i>
        </Link>
        <button className="btn-hover">
        <i className='bx bx-user bx-sm'></i>
        </button>
        <button className="btn-hover">
        <i className='bx bxs-shopping-bag bx-sm'></i>
        </button>
    </div>
  )
}

export default NavbarOptions
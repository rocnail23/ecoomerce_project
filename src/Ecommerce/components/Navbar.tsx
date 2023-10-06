import "../styles/NavBar.css"
import { Filter } from "./Filter"
import NavbarOptions from './NavbarOptions';

export const Navbar = () => {
  return (
    <nav>
    <h1>Style<span>Crash</span></h1>
    <Filter/>
    <NavbarOptions/>
    </nav>
  )
}

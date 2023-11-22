import {  Link  } from "react-router-dom";
import "../styles/NavBar.css"
import NavbarOptions from './NavbarOptions';
import {useState,useRef} from 'react';


export const Navbar = () => {

  const [show, setShow] = useState<boolean>(false)
  const principalPosition = useRef<number>(window.pageYOffset)
  const position = useRef<number>()
  
  window.addEventListener("scroll", () => {
      position.current = window.pageYOffset
     
      if(position.current > principalPosition.current){
        setShow(true)
      }else{
        setShow(false)
      }
  })


  return (
    <nav className={show ? "noShow": ""}>
      <div className="title">
      <Link className="link" to="/"><h1 className="title_h1">Style<span>Crash</span></h1></Link>
      </div>
   
    <NavbarOptions/>
    </nav>
  )
}

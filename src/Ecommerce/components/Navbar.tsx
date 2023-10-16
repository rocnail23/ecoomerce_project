import "../styles/NavBar.css"
import NavbarOptions from './NavbarOptions';
import {useState,useRef} from 'react';


export const Navbar = () => {

  const [show, setShow] = useState<boolean>(false)
  let principalPosition = useRef<number>(window.pageYOffset)
  let position = useRef<number>()
  
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
      <h1>Style<span>Crash</span></h1>
      </div>
    <div className="sex">
     <button className="btn-hover">
     <p>Man</p>
     </button>
     <button className="btn-hover">
     <p>Woman</p>
     </button>
    </div>
    <NavbarOptions/>
    </nav>
  )
}

import { Navbar } from "../components/Navbar"
import { Slider } from "../components/Slider"
import hombre from "../../assets/hombre1.jpg"
import hombre2 from "../../assets/hombre2.jpg"
import "../styles/EcommercePage.css"


const EcommercePage = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="grid-primary">
        <Slider/>
        <img className="img-1" src={hombre} alt="" />
        <img className="img-2" src={hombre2} alt="" />
        </div> 
    </div>
    </>
  )
}

export default EcommercePage
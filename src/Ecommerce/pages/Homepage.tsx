import { Slider } from "../components/Slider"
import hombre from "../../assets/hombre1.webp"
import hombre2 from "../../assets/hombre2.webp"
import "../styles/HomePage.css"
import s1 from "../../assets/s1.webp"
import s2 from "../../assets/s2.webp"
import s3 from "../../assets/s3.webp"
import s4 from "../../assets/s4.webp"
import s5 from "../../assets/s5.webp"
import { SliderComponents } from "../components/SliderComponents"
import { sweeters } from "../../assets/data"
import { Card } from "../components/Card"



const HomePage = () => {
  
  return (
    <>
    
        <div className="grid-primary">
        <Slider/>
        </div> 
        <section >
          <h2 className="home_subtitle m-l">New Styles</h2>
        <div className="bg-s1">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
        </div>
        <div className="action">
          <h3 className="titi">New styles already for you.</h3>
          <p>That first cool breeze in the air calls for a new style.</p>
          <div className="action_buttons">
            <button className="teko">shop men</button>
            <button className="teko">shop women</button>
          </div>
        </div>
        </section>
        <SliderComponents gap="20px" className="m-b4"> 
            {sweeters.map(value=> (
              <Card 
              key={value.id}
              product={value}
              className="shadow"/>
            ))}
        </SliderComponents>
        <section >
          <h2 className="sub_title m-l">New Styles</h2>
        <div className="bg-s1">
          <img src={s4} alt="" />
          <img src={s5} alt="" />
        </div>
        <div className="action">
          <h3 className="titi">Simple. Classic.</h3>
          <p>And super naturally comfortable.</p>
          <div className="action_buttons">
            <button className="teko shop">shop</button>
          </div>
        </div>
        </section>
        <SliderComponents gap="20px"> 
            {sweeters.map(value=> (
              <Card 
              key={value.id}
              product={value}
              className="shadow"/>
            ))}
        </SliderComponents>
        
    </>
  )
}

export default HomePage
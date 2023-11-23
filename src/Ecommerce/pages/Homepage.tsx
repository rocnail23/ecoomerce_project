import { Slider } from "../components/Slider"
import "../styles/HomePage.css"
import s1 from "../../assets/s1.webp"
import s2 from "../../assets/s2.webp"
import s3 from "../../assets/s3.webp"
import s4 from "../../assets/s4.webp"
import s5 from "../../assets/s5.webp"
import { SliderComponents } from "../components/SliderComponents"
import { Card } from "../components/Card"
import useProduct from "../hooks/useProduct"
import { Product } from "../../interfaces/InterfacesForm"
import { Link } from "react-router-dom"



const HomePage = () => {
    const {products} = useProduct()
  return (
    <>
    
        <div className="grid-primary">
        <Slider/>
        </div> 
        <section  className="section_publicity">
          <h2 className="home_subtitle m-l">New Styles</h2>
        <div className="bg-s1">
          <div> <img src={s1} alt="" />  </div>
          <div><img src={s2} alt="" />  </div>
          <div> <img src={s3} alt="" /> </div>
        </div>
        <div className="action">
          <h3 className="titi">New styles already for you.</h3>
          <p>That first cool breeze in the air calls for a new style.</p>
          <div className="action_buttons">
          <Link to="/search" reloadDocument> <button className="teko"> shop</button></Link>
           </div>
        </div>
        </section>
        <SliderComponents gap="20px" className="m-b4"> 
            {products.slice(0,6).map((value:Product)=> (
              <Card 
              key={value.id}
              product={value}
              className="shadow"
              classFont="home_card_description"/>
            ))}
        </SliderComponents>
        <section className="section_publicity" >
          <h2 className="home_subtitle m-l">New Styles</h2>
        <div className="bg-s1">
          <div><img src={s4} alt="" /></div>
          <div><img src={s5} alt="" /></div>
          
        </div>
        <div className="action">
          <h3 className="titi">Simple. Classic.</h3>
          <p>And super naturally comfortable.</p>
          <div className="action_buttons">
           <Link to="/user" reloadDocument> <button className="teko shop">shop</button></Link>
          </div>
        </div>
        </section>
        <SliderComponents gap="20px"> 
            {products.slice(0,6).map(value=> (
              <Card 
              key={value.id}
              product={value}
              className="shadow"
              classFont="home_card_description"/>
            ))}
        </SliderComponents>
        
    </>
  )
}

export default HomePage
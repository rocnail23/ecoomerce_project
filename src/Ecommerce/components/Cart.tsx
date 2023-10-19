import { useState } from "react"
import "../styles/Cart.css"
import { ListCart } from "./ListCart"

export const Cart = () => {

  const [isClose,setClose] = useState(false) 

  return (
    <div className={`cart ${isClose && "open"}`}>
    <button onClick={() => setClose(false)} className="cart_close"><i className='bx bx-x bx-lg'></i></button>
   <i className='bx bx-cart' style={{fontSize:"6rem"}} ></i>
    <ListCart/>
   <div className="cart_price">
    <h3 className="teko">priceCart: 129.00<span className="cart_price_mount teko">$</span></h3>
   </div>
   <button className="cart_button teko">purcharse</button>
    </div>
  )
}

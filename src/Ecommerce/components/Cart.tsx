import "../styles/Cart.css"
import { ListCart } from "./ListCart"

export const Cart = () => {
  return (
    <div className="cart">
    <button className="cart_close"><i className='bx bx-x bx-lg'></i></button>
   <i className='bx bx-cart' style={{fontSize:"6rem"}} ></i>
    <ListCart/>
   
    </div>
  )
}

import useCart from "../hooks/useCart"
import "../styles/Cart.css"
import { ButtonPurchase } from "./ButtonPurchase"
import { ListCart } from "./ListCart"
import { useEffect } from 'react';
import { PaypalButton } from "./PaypalButtons";




export const Cart = () => {

  const {isOpen,switchCard,priceCart,getMount,productInCart} = useCart()

  useEffect(() => {
     getMount()
  },[productInCart])

  return (
    <div className={`shadow cart ${isOpen && "open"}`}>
    <button onClick={switchCard}  className="cart_close"><i className='bx bx-x bx-lg'></i></button>
   <i className='bx bx-cart' style={{fontSize:"6rem"}} ></i>
    <ListCart/>
   <div className="cart_price">
    <h3 className="teko">priceCart: {priceCart}<span className="cart_price_mount teko">$</span></h3>
   </div>
   <ButtonPurchase width="80%"/>
   <PaypalButton/>
    </div>
    
  )
}

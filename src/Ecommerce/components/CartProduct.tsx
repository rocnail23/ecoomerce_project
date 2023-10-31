import { useState } from "react"
import "../styles/CartProduct.css"
import { Product } from "../../interfaces/InterfacesForm"
import useCart from "../hooks/useCart"

interface Props {
    product: {
        product: Product,
        quantity: number
    }
}

export const CartProduct = ({product}:Props) => {
    const {product:item,quantity} = product
    const {addtoCart,deleteCart} = useCart()
    
    const add = () => {
      addtoCart(product.product)
    }    
    
    const minus = () => {
      deleteCart(product.product)
    }

  return (
    <div className="cartProduct bg-g shadow">
       <div className="cartProduct_img">
       <img src={item.img[0]} alt="" />
       </div>
    
      
       <span>{`${item.price}$`}</span>
        <div className="cartProduct_buttons">
            <button onClick={minus} className="cartProduct_buttonst_left">-1</button><div>{quantity}</div><button onClick={add} className="cartProduct_buttonst_right">+1</button>
        </div>
     
    </div>
  )
}

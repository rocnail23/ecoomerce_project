import { useState } from "react"
import "../styles/CartProduct.css"

interface Props {
    product: {
        product: Product,
        quantity: number
    }
}

export const CartProduct = ({product}:Props) => {
    const {product:item,quantity} = product
    const [counter, setCounter] = useState(quantity)
    
    

  return (
    <div className="cartProduct shadow">
        <img src={item.img[0]} alt="" />
        <span>{`${item.price}$`}</span>
        <div className="cartProduct_buttons">
            <button className="cartProduct_buttonst_left">-1</button><div>{counter}</div><button className="cartProduct_buttonst_right">+1</button>
        </div>
    </div>
  )
}

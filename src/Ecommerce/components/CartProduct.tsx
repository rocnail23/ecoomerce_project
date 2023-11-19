import "../styles/CartProduct.css"
import { Product } from "../../interfaces/InterfacesForm"
import useCart from "../hooks/useCart"

interface Props {
    product: {
        Product: Product,
        quantity: number
    }
}

export const CartProduct = ({product}:Props) => {
    const {Product:item,quantity} = product
    const {minusCart,plusCart} = useCart()
   
   

  return (
    <div className="cartProduct bg-g shadow">
       <div className="cartProduct_img">
       <img src={item.Images?.[0].url} alt="" />
       </div>
    
      
       <span>{`${item?.price}$`}</span>
        <div className="cartProduct_buttons">

            <button 
            onClick={() => minusCart(product.Product,quantity - 1)} 
            className="cartProduct_buttonst_left">-1
            </button>

            <div>
              {quantity}
            </div>

            <button 
            onClick={() => plusCart(product.Product,quantity + 1)} 
            className="cartProduct_buttonst_right">
              +1
            </button>

        </div>
     
    </div>
  )
}

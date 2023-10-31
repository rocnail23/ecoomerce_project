import { CartProduct } from './CartProduct'
import "../styles/ListCart.css"
import useCart from '../hooks/useCart'




export const ListCart = () => {

    const {productInCart} = useCart()

  return (
    <div className="listCart">
        {Object.entries(productInCart).map(([index,value]) => (
            <CartProduct product={value}/>
        ))}
    </div>
  )
}

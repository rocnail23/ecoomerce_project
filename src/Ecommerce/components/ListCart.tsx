import { CartProduct } from './CartProduct'
import "../styles/ListCart.css"
import useCart from '../hooks/useCart'




export const ListCart = () => {

    const {productInCart} = useCart()
  console.log(productInCart)
  return (
    <div className="listCart">
        {Object.entries(productInCart).map(([,value]) => (
            <CartProduct key={value.Product.title} product={value}/>
        ))}
    </div>
  )
}

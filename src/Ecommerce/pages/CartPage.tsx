import { ButtonPurchase } from "../components/ButtonPurchase"
import { ListCart } from "../components/ListCart"
import useCart from "../hooks/useCart"
export const CartPage = () => {

  const {priceCart} = useCart()

  return (
    <div className="wishesPage animate__animated animate__fadeIn">
      <h3 className="title_3 teko">list Cart</h3>
      <hr  className="m-b2"/>
      <ListCart/>
      <div className="info_cart">
       <h2 className="teko">Cart Price: {priceCart}<span className="cart_price_mount teko">$</span></h2>
      </div>
     <ButtonPurchase width="20%"/>
    </div>
  )
}

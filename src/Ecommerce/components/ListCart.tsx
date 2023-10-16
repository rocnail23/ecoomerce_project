import dress from "../../assets/cardigan.webp"
import dress1 from "../../assets/cardigan1.webp"
import dress3 from "../../assets/sweter.webp"
import { CartProduct } from './CartProduct'
import "../styles/ListCart.css"

const data: {[key:number]: {product:Product,quantity:number}} = {
    1:{
        product: {  
            id: 1,
            title: "Cardigan",
            price: 59.66,
            description: "Caracilia Women's Oversized Knitted Cardigan Open Front Long Sleeve Lapel Casual Coat Fall 2023 Elegant Coat",
            img: [dress]
         },
         quantity: 2
    }
     , 
    2: {
        product: {
            id: 2,
            title: "ANRABESS",
            description: "ANRABESS Women's Oversized Turtleneck Sweater Long Batwing Sleeve Asymmetrical Hem Knitted Tunic Pullover Casual Buttonless Sweater",
            price: 60.22,
            img: [dress1]
         },
         quantity:3
    },
    3: {
        product: {
            id:3,
            title: "Sweater",
            description: "2023 Women's Long Sleeve Striped Button Down Sweater Open Coat with Pockets",
            price: 20.00,
            img: [dress3]
         },
         quantity: 5
    }
    }

export const ListCart = () => {
  return (
    <div className="listCart">
        {Object.entries(data).map(([index,value]) => (
            <CartProduct product={value}/>
        ))}
    </div>
  )
}

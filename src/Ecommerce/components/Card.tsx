import { useNavigate } from "react-router"
import "../styles/Card.css"
import { ButtonAdd } from "./ButtonAdd"
import { Product } from "../../interfaces/InterfacesForm"
import useCart from "../hooks/useCart"
import { useState } from "react"
import { Heart } from "./Heart"
import { useWish } from "../hooks/useWish"


interface Props {
    product: Product
    className?: string,
    vanish?: boolean
}



export const Card = ({product,className,vanish}: Props) => {
 
    const {description,img,price,title,id} = product
    const {addtoCart} = useCart()
    const {wishProducts,addOrRemoveWish} = useWish()
    const navigate = useNavigate()

    const shortDescription = () => {
        if(description.length > 80){
            return description.slice(0,80) + "..."
        }else {
            return description
        }
    }
    
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation()
            addtoCart(product)
    }

    const  [animation,setAnimation] = useState(false)

    const handleWish = (e:any) => {
        vanish && setAnimation(!animation)
        setTimeout(() => {
            addOrRemoveWish(product)
        },300)
       
    }

    return (
        <div onClick={() => navigate(`/product/${id}`)} className={`card ${className} ${animation && "card_vanish"}`}>
        <Heart onChange={handleWish} value={!!wishProducts[product.id]}/>
        <img className="card_image" src={img[0]} alt="" />
        <div className="card_content">
        <div className="card_t-p">
        <h2  className="card_title">{title}</h2>
        <span className="card_price">{price}$</span>
        </div>
        <p className="card_description">
        {shortDescription()}
        </p>
        <ButtonAdd onClick={handleClick} className="card_btnAdd"/>
        </div>
        </div>
    )

}